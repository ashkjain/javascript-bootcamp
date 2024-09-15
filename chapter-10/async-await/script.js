const promise = new Promise((resolve, reject) => 
    {
        setTimeout(() => 
            {
                resolve({name:'John', age: 23});
            }, 1000);
    });

promise.then((data) => console.log(data));

async function getPromise()
{
    const response = await promise;
    console.log(response);
};

getPromise();

async function getUsers()
{
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await result.json();
    console.log(data);
};

getUsers();

function getUsers()
{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((result) => result.json())
    .then((data) => console.log(data));
};
getUsers();

const getPosts = async() => 
    {
        const result = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await result.json();
        console.log(data);
    };
getPosts();