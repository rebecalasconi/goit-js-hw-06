"use strict";

const range = document.querySelector(`input[type="range"]`);
const text = document.getElementById("text");


range.addEventListener('input', function() {
    text.setAttribute('style', 'font-size: ' + this.value + 'px;');
  });
