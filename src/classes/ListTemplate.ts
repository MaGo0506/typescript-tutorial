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