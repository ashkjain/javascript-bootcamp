// Values Stored on the stack

const name = 'John';
const age = 30;

// Reference values are stored on the heap
const person = {
    name: 'Ash',
    age: 24
};

let newName = name;
newName = 'Johnathan';
console.log(name, newName);

let newPerson = person;
newPerson.name = 'Bradely'
console.log(person, newPerson);
// These are change because they are referencing the same heap in the memory