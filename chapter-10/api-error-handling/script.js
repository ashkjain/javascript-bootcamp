fetch("httpstat.us/200")
    .then((response) => {
        return response
    })
    .then(() => console.log('Success'));

fetch("http://httpstat.us/404")
    .then((response) => {
        return response
    })
    .then(() => console.log('404 Error'))
    .catch((error) => { console.log(error) });

// Test with reponse.ok
fetch('https://httpstat.us/404')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Request Failed');
        }
        return response;
    })
    .then(() => console.log('Success'))
    .catch((error) => {
        console.log(error);
    });

// Check for specific code
fetch('https://httpstat.us/404')
    .then((response) => {
        if (response.status === 404) {
            throw new Error('404 Returned');
        }
        else if(response.status === 500)
        {
            throw new Error('Server Error');
        }
        else if(response.status !== 200)
        {
            throw new Error('Request Failed');
        }
        return response;
    })
    .then(() => console.log('Success'))
    .catch((error) => {
        console.log(error);
    });
