"use strict";
const anchor = document.querySelector('a');
// if (anchor) {
//     console.log(anchor.href)
// }
console.log(anchor.href);
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children)
// inputs
const type = document.querySelector('#type'), toFrom = document.querySelector('#toFrom'), details = document.querySelector('#details'), amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
