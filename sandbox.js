// explicit types
var character;
var age;
var isLoggedIn;
// age = 'luigi';
age = 20;
// isLoggedIn = 25;
isLoggedIn = true;
character = 'mario';
// arrays
var ninjas = [];
ninjas.push('toad');
// ninjas = [12, 23]
// ninjas = ['yoshi', 'mario'];
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = 123;
uid = '123';
// uid = false;
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColour: 'black'
};
