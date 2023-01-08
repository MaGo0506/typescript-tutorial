const me = {
    name: 'Marko',
    age: 22,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
console.log(me);
import { Invoice } from './classes/Invoice.js';
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
