let age = 19;

if (age) 
{
    console.log('You can vote');
}
else
{
    console.log('You cannot vote');
};

// Using ternary Operator
age = 13;
age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
console.log(canVote);

// Multiple Statements
const auth = true;
let redirect;

/* if(auth)
{
    alert('Welcome To THe Dashboard');
}
else{
    alert("Access Denied");
} */
// redirect = auth ? (alert('Welcome To The Dashboard'),'/dashboard') : (alert('Access Denied'),'/login');
console.log(redirect);

// auth ? console.log('Welcome To The Dashboard') : null;
auth && console.log('Welcome To The Dashboard');