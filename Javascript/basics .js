//console.log("Hello Javascript POP UP");
//console.error("This is an error");
//console.warn("This is a warn");

////let, const
// let age = 30;
// age = 16;
// console.log(age);

// const year = 2020;
// console.log(year);

// String, Number, Boolean, null, undefined

const name = "John";
const age = "20";
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof name);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//concatenation
console.log("My name is " + name + " and I'm " +age);

//Template String
//console.log(`My name is ${name} and I am ${age}`);
const str = `My name is ${name} and I am ${age}`;
console.log(str);

// length
console.log(name.length);

//upper case, lower case
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0,3).toUpperCase());
console.log(name.split(""));

const s = 'My, Name, is, Johnny.'
console.log(s.split(", "));

//Array
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruit = ['apple','orange','grape'];
console.log(fruit[1]);
fruit[1]='pear';
console.log(fruit);
fruit.push("mango");
fruit.unshift("strawberry");
console.log(fruit);
fruit.pop();
console.log(Array.isArray(fruit)); // check boolean
console.log(fruit.indexOf('grape'));

const person={
    firstName:'John',
    lastName:'Doe',
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        street:'50 main st',
        city:'New York',
        state:'NY'
    }
}

console.log(person);
console.log(person.firstName,person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);


const {firstName, lastName, address:{city}} = person;
console.log(city);

person.email='john.doe@gmail.com';
console.log(person);
