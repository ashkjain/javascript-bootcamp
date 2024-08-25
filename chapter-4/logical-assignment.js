// ||= assigns the right value only if the left is a falsy value

let a = false;
if(!a)
{
    a = 10;
    console.log(a);
};
let b = false;
b ||=25;
console.log(b);

// &&= assigns the right side value only if the left is a truthy value
let c = 20;
c &&= 50;
console.log(c);

// ??= assigns the right side value only if the left is null or undefined

let d = null;
d??=100;
console.log(d);