let age: any = 25;

age = true;
console.log(age)
age = 'hello';
console.log(age)
age = { name: 'mario' }
console.log(age)

let mixed: any[] = [];

mixed.push(25, 'mario', true)
console.log(mixed)

let ninja: {
    name: any,
    age: any,
    isBlackBelt: any
}

ninja = {
    name: 'yoshi',
    age: 'thirty',
    isBlackBelt: 1
}

console.log(ninja)