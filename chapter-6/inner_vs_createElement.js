// Quick and Dirty

function createListItem(item)
{
    const li = document.createElement('li');
    li.innerHTML = `${item}
                <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                </button>`;
    document.querySelector('#item-list').appendChild(li);
};
createListItem('Eggs');
// Clean and Performant
function createNewItem(item)
{
    const li = document.createElement('li');
    li.className = 'item';
    li.appendChild(document.createTextNode(item))

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector('#item-list').appendChild(li);
}
createNewItem('Honey');

/* const mainComponent = document.querySelector('ul');

const text = document.createTextNode('Pear');
const li = document.createElement('li');
li.className = 'item';
const button = document.createElement('button');
button.className = 'remove-item btn-link text-red';
const i = document.createElement('i');
i.className = 'fa-solid fa-xmark';

button.appendChild(i);
li.appendChild(text);
li.appendChild(button);
mainComponent.appendChild(li);
 */