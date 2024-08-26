const socials = ['Twitter','LinkedIn','Facebook','Instagram'];
// console.log(socials.__proto__);
socials.forEach(function(social)
{
    console.log(social);
});

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`,arr));
function logSocials(social)
{
    console.log(social);
};
socials.forEach(logSocials);

const socialObjects = [
    {name:'Twitter',url:'someLink'},
    {name:'Facebook',url:'someLink2'},
    {name:'Linkedin',url:'someLink3'},
    {name:'Instagram',url:'someLink4'},
];
socialObjects.forEach((item) => console.log(item.url));