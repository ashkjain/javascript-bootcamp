const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => 
    {
        fetch(apiUrl + '?_limit=5')
        .then((response) => response.json())
        .then((data) => 
            {
                data.forEach((todo) => 
                    {
                        const div = document.createElement('div');
                        div.classList = 'border-2 px-4 py-2 border-black'
                        div.appendChild(document.createTextNode(todo.title));
                        div.setAttribute('data-id',todo.id);
                        if(todo.completed)
                            {
                                div.classList.add('bg-gray-400');
                            }

                        document.getElementById('todo-list').appendChild(div);
                    })
            })
        .catch((error) => console.log(error))
    };

getTodos();