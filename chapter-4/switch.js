const date = new Date(2022,2,10,8,0,0);
const month = date.getMonth();

switch(month)
{
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is February');
        break;
    case 3:
        console.log('It is March');
        break;
    default:
        console.log('It is none');
};

const hour = date.getHours();

switch(true)
{
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour < 18:
        console.log('Good Afternoon');
        break;
    default:
        console.log('Good Night');
};