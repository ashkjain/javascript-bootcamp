const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)'); 
const form = document.querySelector('form');

button.addEventListener('click',(e) => 
    {
        alert('Button Was Clicked')
        e.stopPropagation();
    });
div.addEventListener('click',(e) => 
    {
        alert('Div Was Clicked')
        e.stopPropagation();
    });
form.addEventListener('click',(e) => 
    {
        alert('Form Was Clicked')
        e.stopPropagation();
    });