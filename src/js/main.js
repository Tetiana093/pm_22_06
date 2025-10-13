
console.log("main.js ");

// Знаходимо кнопку на сторінці
const btn = document.querySelector("button");

if (btn) {
  btn.addEventListener("click", () => {
    alert("Click yes!");
  });
}

