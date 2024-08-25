let x;

let fruits = ['apple','pear','orange'];
let berries = ['strawberry','blueberry','raspberry'];


fruits.push(berries);
console.log(fruits);

x = fruits[3][1];
console.log(x);

const allFruits = [fruits, berries];
console.log(allFruits[1][0]);

fruits = ['apple','pear','orange'];
berries = ['strawberry','blueberry','raspberry'];

x = fruits.concat(berries);
console.log(x);

// Spread Operator
x = [...fruits, ...berries];
console.log(x);

// Flatten arrays
let arr = [1,[2,3],4,[5,6]];
x = arr.flat();

console.log(x);

//Static methods on Array Object
x = Array.isArray(fruits);
console.log(x);

x = Array.isArray('hello');
console.log(x);

x = Array.from('12345');
console.log(x);

let a = 1;
let b = 2;
let c = 3;
x = Array.of(a,b,c);
console.log(x);