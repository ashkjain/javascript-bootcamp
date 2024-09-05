// Global Variables
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');

// Functions to Add Items
function addItems(e) {
    e.preventDefault();
    const newItem = itemInput.value;
    if (newItem === '') {
        alert('Please add an item');
        return
    };
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);
    itemInput.value = '';
};
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
// Functions to Add Items

// Function to Remove Item
function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove();
    };
};
// Function to Remove Item

function clearAllItems(e)
{
    while(itemList.firstChild)
    {
        itemList.removeChild(itemList.firstChild);
    };
};



// Event Listeners
itemForm.addEventListener('submit', addItems);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearAllItems);