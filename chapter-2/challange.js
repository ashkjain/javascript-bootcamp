// Challange 1

const arr = [1,2,3,4,5];
arr.push(6);
arr.unshift(0);
arr.reverse();
console.log(arr)

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

const arr3 = arr1.concat(arr2.slice(1));
console.log(arr3)


// Challange 2
const library = [
    {
        title:"Some Title",
        author:'author1',
        status:
        {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title:"Some Title 2",
        author:'author2',
        status:
        {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title:"Some Title 3",
        author:'author3',
        status:
        {
            own: true,
            reading: false,
            read: false,
        }
    }
];
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {title: firstBook} = library[0];
console.log(firstBook);

let json = JSON.stringify(library);
console.log(json);