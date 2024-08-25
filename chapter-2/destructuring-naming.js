const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// Instead of creating pair we can just put the variable and it is done
const person = {
    firstName,
    lastName,
    age,
};

// Destrucring
const todo = {
    id:1,
    title: "take out trash",
    user:{
        name:'John',
    },
};
const {id,title, user: {name}} = todo;
console.log(id);
console.log(title);
console.log(name);

// We can also do aliasing with the above
const {id: todoId,title: todoTitle, user: {name: todoName},} = todo;
console.log(todoId);
console.log(todoTitle);
console.log(todoName);

// Destructure Arrays
const numbers = [23,4,5,78,2];
const [first, second, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(rest);