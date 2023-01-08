import {HasFormatter} from "../interfaces/HasFormatter";

export class ListTemplate {
    constructor(private container: HTMLUListElement) {}

    render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
        const li = document.createElement('li')
        const h4 = document.createElement('h4')

        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format()
        li.append(p)

        if (pos === 'start') {
            this.container.prepend(li)
        } else {
            this.container.append(li)
        }
    }
}

// Generics

const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}

let docOne = addUID({name: 'yoshi', age: 30})

console.log(docOne.age)

// With Interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'marko' }
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'shopping list',
    data: ['bread', 'milk', 'eggs']
}

console.log(docThree, docFour)