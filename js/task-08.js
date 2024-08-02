"use strict";

const dataLogin = {
    email: ``,
    password: ``,
}
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) =>{
    event.preventDefault();

    const email = document.querySelector(`input[type="email"]`);
    const password = document.querySelector(`input[type="password"]`);

    if (email.value === "" || password.value === "") {
        alert("Trebuie sa introduci valori in ambele campuri!");
      } else {
        alert("Formularul a fost trimis. Esti logat!");
        dataLogin.email = email.value;
        dataLogin.password = password.value;
        console.log(dataLogin.email);
        console.log(dataLogin.password);
      }
    });
