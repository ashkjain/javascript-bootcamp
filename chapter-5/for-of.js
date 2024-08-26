const items = ['book','table','chair','kite'];
for(const item of items)
{
    console.log(item);
};


// Loop over Array of Objects
const users = [
    {name:'Brad'},
    {name:'Kate'},
    {name: 'Steve'},
];

for(const user of users)
{
    console.log(user.name);
}

// Loop over Strings
const string = 'This is String';
for(const letter of string)
{
    console.log(letter);
};

// Loop over maps
const map = new Map();
map.set('name','John');
map.set('age',30);

for(const [key, value] of map)
{
    console.log(key+' : '+value);
};