// Challange 1

const myString = 'developer';
let rest = myString.slice(1);
let first = myString[0].toUpperCase();
let myNewString = first+rest;
console.log(myNewString);

// Challange 2

let x = Math.round(Math.random() * 100 + 1);
let y = Math.round(Math.random() * 50 + 1);

let sumOutput = x + y;
let differenceOutput = x - y;
let productOutput = x * y;
let quotientOutput = x / y;
let rmOutput = x % y;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);