// Interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(text: string): void
    spend(amount: number): number
}

const me: IsPerson = {
    name: 'Marko',
    age: 22,
    speak(text: string) : void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log(`I spent ${amount}`)
        return amount
    }
};

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name)
}


console.log(me)

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