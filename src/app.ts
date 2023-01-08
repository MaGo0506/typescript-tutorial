import {Invoice} from './classes/Invoice.js'

const invOne = new Invoice('Mario', 'car payment', 500)
const invTwo = new Invoice('Luigi', 'rent', 300)

const invoices: Invoice[] = [];

invoices.push(invOne, invTwo)


invoices.forEach(invoice => {
    console.log(invoice.client, invoice.amount, invoice.format())
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.getElementById('type') as HTMLSelectElement,
    toFrom = document.getElementById('toFrom') as HTMLInputElement,
    details = document.getElementById('details') as HTMLInputElement,
    amount = document.getElementById('amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})