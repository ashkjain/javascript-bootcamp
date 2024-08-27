const numbers = [1,2,3,4,5,6,7,8,9,10];

const sum = numbers.reduce(function(accumulator, currentValue)
    {
        return accumulator + currentValue;
    }
,0);
console.log(sum);

const sum2 = numbers.reduce((prev,next) => prev + next,0);
console.log(sum2);

// Using a for loop
const sum3 = () => {
    let total = 0;
    for(const num of numbers)
    {
        total += num
    };
    return total;
};
console.log(sum3());

const cart = [
    {id:1, name:'Product 1',price:130},
    {id:2, name:'Product 2',price:150},
    {id:3, name:'Product 3',price:175},
];
const total = cart.reduce((prev, next) => prev + next.price,0);
console.log(total);