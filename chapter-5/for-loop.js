for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log('7 is my lucky number');
    }
    else {
        console.log(i);
    }
};

// Nest Loops
for(let i = 0; i <= 10; i++)
{
    console.log('Number '+ i);
    for(let j =  1; j <= 5; j++)
    {
        console.log(`${i} * ${j} = ${i*j}`);
    };
};

// Loop through an array
const names = ['Ash','Larry','Jane'];
for(let i = 0; i < names.length; i++)
{
    console.log(names[i]);
};
