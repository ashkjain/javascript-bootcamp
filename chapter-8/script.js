// Global Variables
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');


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

    checkUI();

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

// Event Listeners
itemForm.addEventListener('submit', addItems);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearAllItems);
checkUI();