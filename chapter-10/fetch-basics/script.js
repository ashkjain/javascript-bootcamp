// Fetching a JSON File
fetch('./movies.json')
    .then((response) => response.json())
    .then((data) => console.log(data));

// Fetching a Text File
fetch('./test.txt')
    .then((response) => response.text())
    .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/ashkjain')
    .then((response) => response.json())
    .then((data) => 
        {
            console.log(data);
            document.querySelector('h1').textContent = data.login;
        });