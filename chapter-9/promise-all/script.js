function getData(endpoint)
{
    return new Promise((resolve, reject) => 
        {
            const xhr = new XMLHttpRequest();

            xhr.open('GET', endpoint);

            xhr.onreadystatechange = function ()
            {
                if(this.readyState === 4)
                {
                    if(this.status === 200)
                    {
                        resolve(JSON.parse(this.responseText));
                    }
                    else
                    {
                        reject("Something Went Wrong");
                    };
                };
            };
            setTimeout(() => 
                {
                    xhr.send();
                },Math.floor(Math.random * 3000) + 1000);
        });
        
};

getData('./actors.json')
    .then((data) => 
    {
        console.log(data);
    });