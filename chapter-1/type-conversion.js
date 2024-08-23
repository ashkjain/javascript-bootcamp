// Convert String to Int
let amount = '100';
console.log(amount, typeof amount);
amount1 = parseInt(amount);
console.log(amount1, typeof amount1);
amount2 = +amount;
console.log(amount2, typeof amount2);
amount3 = Number(amount);
console.log(amount2, typeof amount2);

// Convert Number to String
let intAmount = 100;
let Stringamount = intAmount.toString();
console.log(Stringamount, typeof Stringamount);
let Stringamount2 = String(intAmount);

// Convert String to Decimal
let stringDecimal = '3.14';
let stringDecimal1 = parseFloat(stringDecimal);
console.log(stringDecimal1, typeof stringDecimal1);

// Convert Number to Boolean
let intBool = 1;
let bool = Boolean(intBool);
console.log(bool, typeof bool);

// Pasrsing value that is not a number
let someVal = 'string';
let ifnumber = parseInt(someVal);
console.log(ifnumber, typeof ifnumber);

// What can result in NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);