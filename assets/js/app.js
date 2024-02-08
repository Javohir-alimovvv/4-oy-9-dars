
const divEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const btn_2El = document.querySelector(".btn_2");
const menuEl = document.querySelector(".menu");
const btn_3El = document.querySelector(".light");
const btn_4El = document.querySelector(".night");
btnEl.addEventListener("click", () => {
    menuEl.style.marginLeft = "0";
    btnEl.style.display = "none";
    btn_2El.style.display = "block";
});
btn_2El.addEventListener("click", () => {
    menuEl.style.display = "none";
    btnEl.style.display = "block";
    btn_2El.style.display = "none";
});
btn_3El.addEventListener("click",() => {
    divEl.style.background = "white"
} )
btn_4El.addEventListener("click",() => {
    divEl.style.background = "rgb(12, 12, 60)"
} )