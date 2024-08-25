// Arrow FUnction
function add(a,b)
{
    console.log('Regular');
    return a + b;
};

const ad = (a,b) => {
    console.log('Arrow');
    return a + b;
};
console.log(add(1,2));
console.log(ad(1,2));

// Implicit Return
const subtract = (a,b) => a-b;
console.log(subtract(10,5));

// Can leave off () with a single parameter
const double = a => a * 2;
console.log(double(2));

// Returning an Object - Surround the curly braces with parantheses
const createObj = () => 
({
    name: 'Brad',
});
console.log(createObj());

const numbers = [1,2,3,4,5];
numbers.forEach(function (n)
{
    console.log(n);
});

numbers.forEach((n) =>
{
    console.log(n);
});