// Array Literal
const numbers = [12,45,33,25,11];
const mixed = [12, 'Hello',true, null];
console.log(numbers);

// Array Constructor

const fruits = new Array('apple','orange','grape');
console.log(fruits);

let x;

x = numbers[0];
console.log(x);

x = numbers[0] + numbers[3];
console.log(x);

x = fruits[2];
console.log(x);

x = numbers.length;
console.log(x);

fruits[2] = 'pear';

x = fruits;
console.log(x);

fruits[fruits.length] = 'blueberry';
x = fruits;
console.log(x);