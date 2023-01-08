"use strict";
// classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Mario', 'car payment', 500);
const invTwo = new Invoice('Luigi', 'rent', 300);
const invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach(invoice => {
    console.log(invoice.client, invoice.amount, invoice.format());
});
const form = document.querySelector('.new-item-form');
// inputs
const type = document.getElementById('type'), toFrom = document.getElementById('toFrom'), details = document.getElementById('details'), amount = document.getElementById('amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
