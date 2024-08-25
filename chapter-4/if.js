if(true)
{
    console.log('This is true');
};

if(false)
{
    console.log('This is not true');
}

let x = 10;
let y = 5;

if(x>y)
{
    console.log(`${x} is greater than ${y}`);
};

y = 10;
if(x === y)
{
    console.log(`${x} is equals to ${y}`);
};

x = 2;

if(x === y)
{
    console.log(`${x} is equals to ${y}`);
}
else
{
    console.log(`${x} is not equals to ${y}`);
}

// SHorthand if
if(x <= y) console.log('X is less than or equal to y');
else console.log('x is not less than or equal to y');

// Add more content by using ','
if(x <= y) console.log('X is less than or equal to y'), console.log('This is true');
else console.log('x is not less than or equal to y');