// Global Variables
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');


// Functions to Add Items
function disaplyItems(e)
{
    const itemsFromStorage = getItemFromStorage();
    itemsFromStorage.forEach(item => addItemToDOM(item))
    checkUI();
};


function addItems(e) {
    e.preventDefault();
    const newItem = itemInput.value;
    if (newItem === '') {
        alert('Please add an item');
        return
    };
    // Create Item DOM Element
    addItemToDOM(newItem);

    // Add item to localstorage
    addItemToStorage(newItem);

    checkUI();

    itemInput.value = '';
};

function addItemToDOM(item)
{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);
}
function addItemToStorage(item)
{
    const itemsFromStorage = getItemFromStorage();
    // Add new item to Array
    itemsFromStorage.push(item);

    // COnvert To JSON Strig and set to local storage

    localStorage.setItem('items',JSON.stringify(itemsFromStorage));
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
};
function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
};

function getItemFromStorage()
{
    let itemsFromStorage;
    if(localStorage.getItem('items') === null)
    {
        itemsFromStorage = [];
    }
    else
    {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;
}
// Functions to Add Items

// Function to Remove Item
function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        if(confirm('Are You Sure?'))
        {
            e.target.parentElement.parentElement.remove();

            checkUI();
        }
    };
};
// Function to Remove Item

// Function to Remove All Items
function clearAllItems(e)
{
    while(itemList.firstChild)
        {
            itemList.removeChild(itemList.firstChild);
        };
        checkUI();
    };
// Function to Remove All Items
    
// Function to Clear UI
function checkUI()
{
    const items = document.querySelectorAll('li');
    if(items.length === 0)
    {
        clearButton.style.display = 'none';
        itemFilter.style.display = 'none';
    }
    else
    {
        clearButton.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}
// Function to Clear UI

// Function to Filter Items
function filterItems(e)
{
    // My Function
    /* const filter= e.target.value;
    const itemCount = itemList.childElementCount - 1;
    for(let i = 0; i <= itemCount; i++)
    {
        let itemsContent = itemList.children[i].textContent.trim();
        if(filter.toLowerCase() !== itemsContent.slice(0,filter.length).toLowerCase())
        {   
            itemList.children[i].style.display = 'none';
        }
        else
        {
            itemList.children[i].style.display = '';
        }
    } */

        // Tutorial Function
        const items = itemList.querySelectorAll('li');
        const text = e.target.value.toLowerCase();
        items.forEach((item) => {
            const itemName = item.firstChild.textContent.toLowerCase();

            if(itemName.indexOf(text) != -1)
            {
                item.style.display = 'flex';
            }
            else
            {
                item.style.display = 'none';
            }
        })
}
// Function to Filter Items

// Initialize app
function init()
{

    itemForm.addEventListener('submit', addItems);
    itemList.addEventListener('click', removeItem);
    clearButton.addEventListener('click', clearAllItems);
    itemFilter.addEventListener('input',filterItems)
    document.addEventListener('DOMContentLoaded',disaplyItems)   
    checkUI();
}
init();