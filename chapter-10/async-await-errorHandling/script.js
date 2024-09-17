const getUsers = async (url) => 
    {
        try
        {
            const response = await fetch(url);
            if(!response.ok)
            {
                throw new Error('Request Failed');
            }
            const data = await response.json();
            console.log(data)
        }
        catch(error)
        {
            console.log(error);
        };
    };

const api = 'https://jsonplaceholder.typicode.com/usrs';
getUsers(api);

const getPosts = async (url) => 
    {
        const response = await fetch(url);
        if(!response.ok)
            {
                throw new Error('Request Failed');
            }
            const data = await response.json();
            console.log(data);
    };

const apiUrl = 'https://jsonplaceholder.typicode.com/post';
getPosts(apiUrl).catch((error) => console.log(error));