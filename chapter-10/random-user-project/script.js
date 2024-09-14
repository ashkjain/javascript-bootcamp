function getData()
{
    const url = 'https://randomuser.me/api/';
    fetch(url)
    .then((response) => 
        {
            return response.json();
        })
    .then ((data) => 
        {
            if(document.getElementById('info').classList.contains('hidden'))
            {
                document.getElementById('info').classList.remove('hidden')
            }
            addDataElements(data.results)
        })
    .catch((error) => console.log(error));
};
function addDataElements(data)
{
    document.getElementById('name').innerText = `${data[0].name.first} ${data[0].name.last}`;
    document.getElementById('email').innerText = data[0].email;
    document.getElementById('phone').innerText = data[0].cell;
    document.getElementById('location').innerText = `${data[0].location.city}, ${data[0].location.country}`
    document.getElementById('age').innerText =  data[0].registered.age;
    document.getElementById('profile').setAttribute('src', data[0].picture.large);
};


const button = document.getElementById('generate');
button.addEventListener('click', getData);

