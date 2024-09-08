const api = "https://api.chucknorris.io/jokes/random";

function getJoke(e)
{
    const xhr = new XMLHttpRequest();
xhr.open('GET',api);
xhr.onreadystatechange = function()
{
    if(this.readyState === 4 && this.status === 200)
    {
        const data = JSON.parse(this.responseText);
        document.querySelector('#joke').innerHTML = `<strong class="text-xs">${data.value}</strong>`;
    };
};
xhr.send();
};
document.querySelector('#getJoke').addEventListener('click', getJoke);