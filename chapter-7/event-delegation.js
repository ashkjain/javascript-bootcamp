/* const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
    item.addEventListener('click', (e) => e.target.remove())
}); */

const list = document.querySelector('ul');
list.addEventListener('click',(e) => {
    if(e.target.tagName === 'LI')
    {
        e.target.remove();
    }
})