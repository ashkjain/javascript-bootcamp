const post = {
    id:1,
    title:'Post One',
    body: 'This is the body',
};

// Convert to JSON String
const str = JSON.stringify(post);
console.log(str);

// Parse JSON
const obj = JSON.parse(str);
console.log(obj);

const posts = [
    {
        id:1,
        title:'Post One',
        body: 'This is the body',
    },
    {
        id:2,
        title:'Post Two',
        body: 'This is the body Two',
    },
    {
        id:3,
        title:'Post Three',
        body: 'This is the body THree',
    }
];

const str2 = JSON.stringify(posts);
console.log(str2);

// To use the JSON we have to parse in the Object and then we can access it.