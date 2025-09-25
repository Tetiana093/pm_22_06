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



// HTML таска з gulp-file-include
const html_task = () => {
  return src('src/pages/*.html') // основні html файли
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file' // шукати інклуди відносно файлу
    }))
    .pipe(htmlmin({ collapseWhitespace: true })) // мінімізація
    .pipe(dest('dist'))
    .on('end', () => browserSync.reload()); // перезавантаження браузера
};


// SCSS таска
const scss_task = () => {
  return src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream()); // інʼєкція без reload
};

// JS таска
const js_task = () => {
  return src('src/js/**/*.js')
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/js'))
    .on('end', () => browserSync.reload());
    // .pipe(browserSync.stream());
};

// Images таска
const img_task = () => {
  return src('src/img/**/*')
    .pipe(imagemin())
    .pipe(dest('dist/imgs'))
    .pipe(browserSync.stream());
};

// ----------------- СЕРВЕР -----------------

const serve = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });

  // Слідкуємо за всіма файлами у src/
  watch('src/pages/*.html', html_task);
  watch('src/scss/**/*.scss', scss_task);
  watch('src/js/**/*.js', js_task);
  watch('src/img/**/*', img_task);
};

// ----------------- ЗБІРКА -----------------

const build = series(
  parallel(html_task, scss_task, js_task, img_task),
  serve
);

// ----------------- ЕКСПОРТИ -----------------

exports.html = html_task;
exports.scss = scss_task;
exports.js = js_task;
exports.img = img_task;
exports.serve = serve;
exports.default = build;


