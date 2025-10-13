// gulpfile.js

// 1. Імпорти
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');


// Bootstrap CSS таска
const bootstrapCSS = () => {
  return src('node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(dest('dist/css'));
};

// Bootstrap JS таска
const bootstrapJS = () => {
  return src('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
    .pipe(dest('dist/js'));
};

// HTML таска з gulp-file-include
const html_task = () => {
  return src('src/**/*.html') // основні html файли
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file' // шукати інклуди відносно файлу
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
};


// SCSS таска
const scss_task = () => {
  return src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/css'));
};

// JS таска
const js_task = () => {
  return src('src/**/*.js')
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/js'));
};

// Images таска
const img_task = () => {
  return src('src/img/**/*')
    .pipe(imagemin())
    .pipe(dest('dist/imgs'));
};

// BrowserSync таска
const serve = () => {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });

  // Слідкування за файлами
  watch('src/**/*.html', html_task).on('change', browserSync.reload);
  watch('src/**/*.scss', scss_task).on('change', browserSync.reload);
  watch('src/**/*.js', js_task).on('change', browserSync.reload);
  watch('src/**/*', img_task).on('change', browserSync.reload);
};

exports.bootstrap = parallel(bootstrapCSS, bootstrapJS);
exports.html = html_task;
exports.scss = scss_task;
exports.js = js_task;
exports.img = img_task;
exports.serve = serve;

exports.default = series(
  parallel(bootstrapCSS, bootstrapJS, html_task, scss_task, js_task, img_task),
  serve
);