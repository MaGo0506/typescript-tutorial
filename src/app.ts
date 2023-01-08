import {Invoice} from './classes/Invoice.js'
import {Payment} from './classes/Payment.js'
import {HasFormatter} from "./interfaces/HasFormatter.js";
import {ListTemplate} from "./classes/ListTemplate.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.getElementById('type') as HTMLSelectElement,
    toFrom = document.getElementById('toFrom') as HTMLInputElement,
    details = document.getElementById('details') as HTMLInputElement,
    amount = document.getElementById('amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)

    } else if (type.value === 'payment') {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
        console.log(doc.format())
    }

    // @ts-ignore
    list.render(doc, type.value, 'end')
})