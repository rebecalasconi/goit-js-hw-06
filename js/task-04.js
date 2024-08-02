"use strict";

const data = {
    counterValue: 0,
}

const value = document.getElementById("value");
const counter = document.getElementById("counter");
const btn = document.getElementsByTagName("button");
console.log(btn[0]);

counter.addEventListener('click', handleChange);

function handleChange(event) {
    if(event.target === btn[1]) {
        data.counterValue += 1;
    } else if(value.textContent < 1) {
        alert(`Cantitatea trebuie sa fie un numar pozitiv!`)
    } else {
        data.counterValue -= 1;
    } 
    value.textContent = data.counterValue
}