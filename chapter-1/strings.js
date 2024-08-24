let x;
const name = 'Ash';
const age = 24;
x = 'Hello My Name is '+name+' and I am ' + age + ' years old';
console.log(x);

// Template Literals
x = `Hello My Name is ${name} and I am ${age} years old`;
console.log(x);

// String properties and methods
const s = "Hello World";

x = s.length; 
console.log(x);

x = s[0];
console.log(x);

x = s.__proto__;
console.log(x);

x = s.toUpperCase();
console.log(x);

x = s.toLowerCase();
console.log(x);

x = s.charAt(0);
console.log(x);

x = s.indexOf('e');
console.log(x);

x = s.substring(0,4);
console.log(x);

x = s.substring(7);
console.log(x);

x = s.slice(0,5);
console.log(x);

x = s.slice(-11, -6);
console.log(x);

x = s.trim();
console.log(x);

x = s.replace('World', 'Ash');
console.log(x);

x = s.includes('Hello');
console.log(x);

x = s.valueOf();
console.log(x);

x = s.split(' ');
console.log(x);


const myString = 'developer';
let rest = myString.slice(1);
let first = myString[0].toUpperCase();
let myNewString = first+rest;
console.log(myNewString);