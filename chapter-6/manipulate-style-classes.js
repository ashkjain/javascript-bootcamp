const text = document.querySelector('p');
const itemsList = document.querySelector('.item-list');
const items = itemsList.querySelectorAll('li');

function run()
{
    // className
    // text.className = 'dark';

    // classList
    /* text.classList.add('dark');
    text.classList.remove('card'); */

    //toggleClass
    /* text.classList.toggle('dark');
    text.classList.toggle('hidden'); */

    // replace
    // text.classList.replace('card','dark');

    // change style
    // itemsList.computedStyleMap.lineHeight = '2';

    items.forEach((item, index) =>
    {
        item.style.color = 'red';
        if(index === 2)
        {
            item.style.color = 'blue';
        }
    });
};
document.querySelector('button').onclick = run;