const x = 100;

if(true)
{
    // Block scope
    const y = 200;
    console.log(x + y);
};

// console.log(x + y); // This will not work, because y belongs to the if block, and not available globally. 

for(let i = 0; i <= 10; i++)
{
    console.log(i);
};
// console.log(i) // This will not work since i belongs to the for loop block 

if(true)
{
    const a = 500;
    let b = 600;
    var c = 400;
};
// console.log(a);
// console.log(b);
console.log(c); // This works because var is not blocked scope, which is not a good practice

// But var is function scoped