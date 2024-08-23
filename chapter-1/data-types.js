// Primitive Data Types
// String
const firstName = "Ash";
let output = firstName;
console.log(output, typeof output);
// Number
const age = 30;
output = age
console.log(output, typeof output);
// Boolean
const hasKids = false;
output = hasKids;
console.log(output, typeof output);
// Null
const aptNumber = null;
output = aptNumber;
console.log(output, typeof output);
// Undefined
let score;
output = score;
console.log(output, typeof output);
// Symbol
const id = Symbol('id');
output = id;
console.log(output, typeof output);
// BigInt
const n =  9007199254740991n;
output = n;
console.log(output, typeof output);

// Reference Data Types (Objects)

// Arrays
const numbers = [1,2,3,4,5];
output = numbers;
console.log(output, typeof output);

// Object
const person = {
    name: "Ash",
    age: 24
};
output = person;
console.log(output, typeof output);

// Function
function sayHello()
{
    console.log("Hello");
}
output = sayHello;
console.log(output, typeof output);
