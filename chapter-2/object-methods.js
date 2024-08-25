let x;
const todo = {};

todo.id = 1;
x = todo;
console.log(x);

const todo1 = new Object();
todo1.id = 1;
todo1.name = 'Jane';

x = todo1;
console.log(todo1)

const person = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.3232,
        },
    },
};

x = person.address.coords.lat;
console.log(x);

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const obj3 = {obj1, obj2};
x = obj3;
console.log(x);
const obj4 = {...obj1, ...obj2};
x = obj4;
console.log(x);

const obj5 = Object.assign({}, obj1, obj2);
x = obj5;
console.log(obj5);

const todos = [
    {id:1, name:'Buy Milk'},
    {id:2, name:'Pick kids from school'},
    {id:3, name:'Take out trash'},
];
x = todos[0];
console.log(x);
x = todos[0].name;
console.log(x);

x = Object.keys(obj1);
console.log(x);

x = Object.keys(obj1).length;
console.log(x);

x = Object.values(obj1);
console.log(x)

x = Object.entries(obj1);
console.log(x);

x = todo.hasOwnProperty('id');
console.log(x);