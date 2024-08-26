const words = ['spray','limit','elite','destruction'];
const result = words.filter(word => word.length > 6);
console.log(result);

const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(function(number)
{
    return number% 2 === 0;
});
console.log(evenNumbers);

// short version
const evenNumbers2 = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers2);

let evenNumber = [];
numbers.forEach((number) => {
    if(number % 2 === 0)
        {
            evenNumber.push(number);
        } 
});
console.log(evenNumber);

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

// Get only retail company
const retail = companies.filter((comp) => comp.category == 'Retail');
console.log(retail);

// Get companies start in or after 1980 and ended in or before 2005
const earlyCompany = companies.filter((comp) => comp.start >= 1980 && comp.end <= 2005);
console.log(earlyCompany);

// Get companies that lasted 10 years or more
const longCompanies = companies.filter((comp) => (comp.end - comp.start) >= 10 );
console.log(longCompanies);