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


    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(...values)

    } else if (type.value === 'payment') {
        doc = new Payment(...values)
        console.log(doc.format())
    }

    // @ts-ignore
    list.render(doc, type.value, 'end')
})

// Generics

const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}

let docOne = addUID({name: 'yoshi', age: 30})

console.log(docOne.age)

// ENUMS
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource<T> {
    uid: number;
    resourceType: number
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
}

const docFour: Resource<object> = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: {name: 'yoshi'}
}

console.log(docThree, docFour)

// Tuples

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'ken';
arr = [30, false, 'honda']

let tup: [string, number, boolean] = ['ryu', 40, true];
tup[0] = 'ken';
tup[1] = 15;

let student: [string, number]
student = ['chun-li', 23123]