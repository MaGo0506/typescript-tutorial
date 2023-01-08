import {Invoice} from './classes/Invoice.js'
import {Payment} from './classes/Payment.js'
import {HasFormatter} from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;
//
// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plumbing work', 200)
//
// console.log(docTwo.format())
//
// let docs: HasFormatter[] = []
//
// docs.push(docOne, docTwo)

// console.log(docs)
//
// const invOne = new Invoice('Mario', 'car payment', 500)
// const invTwo = new Invoice('Luigi', 'rent', 300)
//
// const invoices: Invoice[] = [];
//
// invoices.push(invOne, invTwo)
//
//
// invoices.forEach(invoice => {
//     console.log(invoice.client, invoice.amount, invoice.format())
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.getElementById('type') as HTMLSelectElement,
    toFrom = document.getElementById('toFrom') as HTMLInputElement,
    details = document.getElementById('details') as HTMLInputElement,
    amount = document.getElementById('amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
        console.log(doc.format())
    } else if (type.value === 'payment') {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
        console.log(doc.format())
    }
})