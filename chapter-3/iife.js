// Immediately Invoked Function Expression (IIFE)

// If we have multiple files and both have a same name variable thay will cause an error on browser
// We can use this instead
(function () {
    const user = 'John';
    console.log(user);
}) ();

// We open parantheses put an unnamed function and after completion we invoke it and terminate it.

// IIFE with a parameter
(function (name){
    console.log(`Hello ${name}`);
})('Ash');