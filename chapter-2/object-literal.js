let x;
const person = {
    name: 'Ash',
    age: 24,
    isAdmin: true,
    address:{
        street: '123 Main St',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music','sports'],
};
console.log(person);

x = person.name;
console.log(x);

x = person['age'];
console.log(x);

x = person.address.state;
console.log(x);

x = person.hobbies[0];
console.log(x);

person.name = "Jack";
person.isAdmin = false;

console.log(person.name);
console.log(person.isAdmin);

delete person.age;
console.log(person);

person.hasChildren = true;
console.log(person);

person.greet = function()
{
    console.log(`Hello my name is ${this.name}`);
};

person.greet();

const person2 = {
    'first name': 'ash',
    'last name':'j',
};

console.log(person2['first name']);