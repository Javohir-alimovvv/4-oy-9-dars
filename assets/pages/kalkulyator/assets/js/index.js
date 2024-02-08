const btnEl = document.querySelector(".btn");
const textEl = document.querySelector(".text");

let num1 = prompt("birinchi sonni kiriting");
let num2 = prompt("ikkinchi sonni kiriting");
let qiymat = prompt("qiymatni kiriting");
btnEl.addEventListener("click", () => {
    textEl.innerHTML = eval(num1 + qiymat + num2);
});