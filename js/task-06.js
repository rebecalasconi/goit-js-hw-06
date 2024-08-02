"use strict";

const charSet = document.querySelector(`input[data-length="6"]`);
const input = document.querySelector(`#validation-input`);
const charNumb = Number(charSet.dataset.length);

const validateInput = (e) => {
    let value = e.currentTarget.value.length
    if(e.currentTarget.value !=''){
        if (value === charNumb){
            input.classList.remove('invalid');
            input.classList.add('valid');
            return;
        }
        input.classList.add('invalid');
        console.log(`Numarul de caractere trebuie sa fie ${charNumb}!`);
        return;
    }
    input.removeAttribute('class');
}

input.addEventListener('blur', validateInput);