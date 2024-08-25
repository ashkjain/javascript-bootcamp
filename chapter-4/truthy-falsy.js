const email = 'test@test.com';

if(email)
{
    console.log('An email has been passed');
};

console.log(Boolean(email));

/*
Falsy Values: - 
false
0
"" or ''
null
undefined
NaN
*/
let x;
x = false;
console.log(Boolean(x));
x = 0;
console.log(Boolean(x));
x = "";
console.log(Boolean(x));
x = null;
console.log(Boolean(x));
x = undefined;
console.log(Boolean(x));
x = NaN;
console.log(Boolean(x));

/* 
Truthy Values
true
'0' (zero in string)
' ' or " " (String with whitespace)
'false' (false in string)
[] (Empty Array)
{} (Empty Object)
function () {} (Empty Function)
*/

// Truthy and Falsey Caveats
const children = 0;
if(children !== undefined)
{
    console.log(`You have ${children} children`);
}
else
{
    console.log('Please enter number of Children');
};

// Checking for empty array

// const post = ['Post One','Post Two'];
const post = [];
if(post.length)
{
    console.log('Lists Posts')
}
else
{
    console.log('No Posts')
}

// Checking for empty object
const user = {
    // 'name':'Ash',
};

if(Object.keys(user).length)
{
    console.log('List User');
}
else
{
    console.log('No user');
};

// Loose Equality (==)
console.log(false==0);
console.log(false===0);
console.log(''==0);
console.log(''===0);