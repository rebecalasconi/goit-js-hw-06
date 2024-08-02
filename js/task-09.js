"use strict";

function getRandomHexColor() {
 const val = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    document.body.style.backgroundColor = val;
    let  color = document.querySelector(".color");
    color.textContent = val;
}

const btn = document.querySelector(".change-color");
btn.addEventListener("click", getRandomHexColor);