function getData(endpoint)
{
    return new Promise((resolve, reject) => 
    {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', endpoint);

        xhr.onreadystatechange = function()
        {
            if(this.readyState === 4 && this.status === 200)
            {
                console.log(JSON.parse(this.responseText));
            };
        };
        setTimeout(() => 
            {
                xhr.send();
            }, Math.floor(Math.random() * 3000) + 1000);
    });
};
