// setTimeout(changeText, 2000)

function changeText()
{
    document.querySelector('h1').textContent = 'Hello From Callback';
};

const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click',() => {
    clearTimeout(timerId);
    console.log('Timer Cancelled')
});