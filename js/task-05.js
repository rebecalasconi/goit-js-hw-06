"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};


input.addEventListener('input', (event) => {
    if (event.currentTarget.value && event.currentTarget != "") {
        output.innerText = capitalizeFirstLetter(event.currentTarget.value);
    } else {
        output.innerText = 'Anonymous';
    };
});
