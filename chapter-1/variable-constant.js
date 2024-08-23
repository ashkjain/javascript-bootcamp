// Ways to declare variable
// var, let, const

// ES 2015 var was deprecated

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming conventions
// Only letters, numbers, underscores and dollar sign
// Cannot start with number

/* 
Multi-word Formatting
firstName = camelCase
first_name = snakecase
FirstName = Pascalcase
firstname = lowercase
*/

// Reassigning variables
age = 31;
console.log(age);


let score; // Declaration but not initilization
score = 1; // Initialization
console.log(1);

const x = 10;
// Constant cannot be directly reassigned
// x = 11;

// Need to be initialized while declaring
// const y;  //error
const y = 3.14; //Success

const array = [1,2,3,4];
console.log(array);
// Cannot just reassign 
// array = [1,2,3,4,5];
// But can use Array methods to add or remove value
array.push(5);
console.log(array);

const person = {
    name: 'Ash',
}
// person = {age : 30}; Not going to work
person.age = 24;
// This will work

// Declare multiple values at once
let a, b, c;
const d = 10, e = 20;
