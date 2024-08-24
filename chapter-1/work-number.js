let x;

const num = 5;
console.log(typeof num);

const num2 = new Number(5.4227);
console.log(typeof num);

x = num.toString();
console.log(x);

x = num.toString().length;
console.log(x);

x = num.toFixed(2);
console.log(x);

x = num2.toPrecision(2);
console.log(x);

x = num.toExponential(2);
console.log(x);

x = num.toLocaleString('en-US');
console.log(x);

x = Number.MAX_VALUE;
console.log(x);

x = Number.MIN_VALUE;
console.log(x);