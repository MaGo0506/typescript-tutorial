export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 30 });
console.log(docOne.age);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'marko' }
};
const docFour = {
    uid: 2,
    resourceName: 'shopping list',
    data: ['bread', 'milk', 'eggs']
};
console.log(docThree, docFour);
