"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Mario', 'car payment', 500);
const invTwo = new Invoice('Luigi', 'rent', 300);
const invoices = [];
invoices.push(invOne, invTwo);
console.log(invoices);
// console.log(invOne.format())
// console.log(invTwo.format())
invOne.client = 'Yoshi';
invTwo.amount = 400;
console.log(invoices);
const form = document.querySelector('.new-item-form');
// inputs
const type = document.getElementById('type'), toFrom = document.getElementById('toFrom'), details = document.getElementById('details'), amount = document.getElementById('amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
