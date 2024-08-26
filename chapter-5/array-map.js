const arr = [1,2,3,4];
const map1 = arr.map(x => x * 2);
console.log(map1);

const numbers = [1,2,3,4,5];
const doubleNumbers = numbers.map(x => x * 2);
console.log(doubleNumbers);

// Same with for each
const doubleNumbers2 = [];
numbers.forEach((num) => 
    {
        doubleNumbers2.push(num*2);
    });
console.log(doubleNumbers2);

// Create an array of companies name
const companies = [
    {name:'Company One',category: 'Finance',start:1981, end: 2004},
    {name:'Company Two',category: 'Retail',start:1992, end: 2008},
    {name:'Company Three',category: 'Auto',start:1999, end: 2007},
    {name:'Company Four',category: 'Retail',start:1989, end: 2010},
    {name:'Company Five',category: 'Technology',start:2009, end: 2014},
    {name:'Company Six',category: 'Finance',start:1987, end: 2010},
    {name:'Company Seven',category: 'Auto',start:1986, end: 1996},
    {name:'Company Eight',category: 'Technology',start:2011, end: 2016},
    {name:'Company Nine',category: 'Retail',start:1981, end: 1989},
];

const companyNames = companies.map(comp => comp.name);
console.log(companyNames);

// Create an array with just company and category
const companyInfo = companies.map(comp => {
    return {
        name: comp.name,
        category: comp.category,
    };
});
console.log(companyInfo);

// Create an array of the length of each company in years
const companyLength = companies.map(comp => (comp.end - comp.start));
console.log(companyLength);

// Create an array of objects with the name and length of each company in years
const companyInfoYears = companies.map(comp => {
    return {
        name:comp.name,
        years: (comp.end - comp.start),
    };
});
console.log(companyInfoYears);

// Chain Map Methods
const nums = [2,4,6,8];
const squareAndDouble = nums
    .map((num) => Math.sqrt(num))
        .map((sqrt) => sqrt * 2);
console.log(squareAndDouble);

// Chaining multiple methods
const num = [1,2,3,4];
const evenDoubleSqrt = num
    .filter(x => x % 2 === 0)
        .map(y => y * 2)
            .map(z => Math.sqrt(z));
console.log(evenDoubleSqrt);