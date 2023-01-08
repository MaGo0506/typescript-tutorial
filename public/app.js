import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector('.new-item-form');
// inputs
const type = document.getElementById('type'), toFrom = document.getElementById('toFrom'), details = document.getElementById('details'), amount = document.getElementById('amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else if (type.value === 'payment') {
        doc = new Payment(...values);
        console.log(doc.format());
    }
    // @ts-ignore
    list.render(doc, type.value, 'end');
});
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 30 });
console.log(docOne.age);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
const docFour = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi' }
};
console.log(docThree, docFour);
// Tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'ken';
arr = [30, false, 'honda'];
let tup = ['ryu', 40, true];
tup[0] = 'ken';
tup[1] = 15;
let student;
student = ['chun-li', 23123];
