"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.getElementById("ingredients");
const list = document.createElement("ul"); 
list.classList.add("item");

container.append(list);

ingredients.forEach((ingredient) => {
const li = document.createElement("li");
li.textContent = ingredient;
list.append(li);
});

