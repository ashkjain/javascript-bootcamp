function registerUser(user)
{
    return user + ' is registered';
};

console.log(registerUser('Ash'));

function registeredUser(user)
{
    if(!user)
        {
            user = 'Bot';
            return user + ' is registered';
    };
};

// Default Parameter
function registerUser1(user = 'Bot')
{
    return user + ' is registered';
};
console.log(registerUser1());

// Rest parameters
function sum(...num)
{
    return num;
};
console.log(sum(1,2,3,4,5));

function sum2(...num)
{
    let total = 0;
    for(const n of num)
    {
        total+= n;
    }
    return total;
};
console.log(sum2(1,2,3,4,5));

// Object as parameter
function loginUser(user)
{
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}
const user = {
    id:1,
    name:'Jane',
};
console.log(loginUser(user));

// Arrays as parameter
function getRandom(arr) // or use rest operator
{
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
};

console.log(getRandom([1,2,3,4,5,6,7]));