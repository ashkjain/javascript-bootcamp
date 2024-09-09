
// Create a promise
const promise = new Promise((resolve, reject) => {
    // Do Some Async Task
    setTimeout(() =>{
        console.log("Async task completed");
        resolve();
    },1000);
});

promise.then(() => {
    console.log("Promise Consumed");
});

console.log("Hello from global scope")

// Or when using then along with promise
new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("Async Task 2 Completed");
        resolve();
    },1000);
}).then(() => {
    console.log('Promise 2 Consumed');
});

// Receving or collecting data from a promise

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({"userName":"jdoe123","userAge":"22"});
    },1000)
}).then((user) => {
    console.log(`User Name is: ${user.userName} and age is: ${user.userAge}`);
})

// Error handling with Promises
const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error)
        {
            resolve({"userName":"jdoe123","userAge":"22"});
        }
        else
        {
            reject('Error: Something Went Wrong');
        }
    },1000)
});

getUser
    .then((user) => console.log(user))
    .catch((error) => console.log(error))
    .finally(() => console.log('The promise has been resolved or rejected'));
