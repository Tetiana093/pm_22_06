// document.getElementById('btn').addEventListener('click', () => {
//   alert('Gulp works');
// });

// Простий тестовий код
console.log("main.js yess!");

// Знаходимо кнопку на сторінці
const btn = document.querySelector("button");

if (btn) {
  btn.addEventListener("click", () => {
    alert("Click yes!");
  });
}

