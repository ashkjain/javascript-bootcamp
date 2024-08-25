console.log(10 > 20 && 30 > 15);
console.log(10 < 20 && 30 > 15);
console.log(10 > 20 || 30 > 15);
console.log(10 > 20 || 30 < 15);

// && - Will return first falsy value or the last value

let a;
a = 10 && 20;
console.log(a);
a = 10 && 20;
console.log(a);
a = 10 && 0 && 30;
console.log(a);

// const posts = ['Post one','Post Two'];
const posts = [];
console.log(posts.length > 0 && console.log(posts[0]));

// || will return the first truthy value or last value
let b;
b = 10 || 20;
console.log(b);
b = 0 || 20;
console.log(b);
b = 0 || null || '' || undefined;
console.log(b);

// ?? - Returns the right side operator when the left is either null or undefined
let c;
c = 10 ?? 20;
console.log(c);
c = null ?? 20;
console.log(c);
c = 0 ?? 20;
console.log(c);
c = '' ?? 20;
console.log(c);