let x;
let arr = [54,15,38,23];
console.log(arr);

arr.push(100);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(99);
console.log(arr);

arr.shift();
console.log(arr);

arr.reverse();
console.log(arr);

x = arr.includes(22);
console.log(x);
x = arr.includes(23);
console.log(x);

x = arr.indexOf(23);
console.log(x);
x = arr.indexOf(223);
console.log(x); // -1 if not exist

x = arr.slice(1,3);
console.log(x);

x = arr.splice(1,3); // Manupulate the original array
console.log(x);
console.log(arr);

arr = [23,66,13,5];
x = arr.splice(3,1);
console.log(x);