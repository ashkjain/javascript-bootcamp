console.log(window.innerWidth);

// Global scope
const x = 100;
console.log(x,' in global');
function globalFunc()
{
    console.log(x,' in function');
};
globalFunc();

if(true)
{
    console.log(x, ' in block');
};

function add()
{
    // THis is function scope, cannot access y from outside
    const x = 1; // This is called variable shadowing
    const y = 50;
    console.log(x + y);
};
add();
// console.log(y); // THis will cause an error because this is not defined and only exist inside a function
console.log(x);
// THe value that is passed in the x inside the function remains inside the function, its scope is not global
