// FUnction Declaration
function addDollarSign(value)
{
    return '$' + value;
};
console.log(addDollarSign(100));

// Function expression
const addPlusSign = function (value)
{
    return '+' + value;
};
console.log(addPlusSign(200));

// Regular declared function can be used before declaration. But function expression can only be invoked aftet.