// classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('Mario', 'car payment', 500)
const invTwo = new Invoice('Luigi', 'rent', 300)

const invoices: Invoice[] = [];

invoices.push(invOne, invTwo)

console.log(invoices)

// console.log(invOne.format())
// console.log(invTwo.format())

invOne.client = 'Yoshi'
invTwo.amount = 400;

console.log(invoices)

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