// Global Variables
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
let isEditMode = false;
const formBtn = itemForm.querySelector('button');


// Functions to Add Items
function disaplyItems(e) {
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

    // Check for Edit mode
    if (isEditMode) {
        const itemToEdit = itemList.querySelector('.edit-mode');
        removeItemFromStorage(itemToEdit.textContent);
        itemToEdit.classList.remove('edit-mode');
        itemToEdit.remove();
        isEditMode = false;
    }
    else {
        if (checkIfItemExists(newItem)) {
            alert('That item already exists!');
            return;
        }
    }


    // Create Item DOM Element
    addItemToDOM(newItem);

    // Add item to localstorage
    addItemToStorage(newItem);

    checkUI();

    itemInput.value = '';
};

function addItemToDOM(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);
}
function addItemToStorage(item) {
    const itemsFromStorage = getItemFromStorage();
    // Add new item to Array
    itemsFromStorage.push(item);

    // COnvert To JSON Strig and set to local storage

    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
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

function getItemFromStorage() {
    let itemsFromStorage;
    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    }
    else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;
}
// Functions to Add Items

// Function to Remove Item
function onClickRemove(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement.parentElement);
    }
    else {
        setItemToEdit(e.target);
    }
}

function checkIfItemExists(item) {
    const itemsFromStorage = getItemFromStorage();

    return itemsFromStorage.includes(item);
}

function setItemToEdit(item) {
    isEditMode = true;

    itemList.querySelectorAll('li').forEach((i) => i.classList.remove('edit-mode'));

    item.classList.add('edit-mode');
    formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
    formBtn.style.backgroundColor = '#228B22';
    itemInput.value = item.textContent;
}

function removeItem(item) {

    if (confirm('Are You Sure?')) {

        // Remove from DOM
        item.remove();

        // Remove item from Storage
        removeItemFromStorage(item.textContent)
        checkUI();
    };
};

function removeItemFromStorage(item) {
    let itemsFromStorage = getItemFromStorage();

    // FIlter our item to be removed
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

    // Reset to localstorage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}
// Function to Remove Item

// Function to Remove All Items
function clearAllItems(e) {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    };

    // Clear from localStorage
    localStorage.removeItem('items');
    checkUI();
};
// Function to Remove All Items

// Function to Clear UI
function checkUI() {
    itemInput.value = '';
    const items = document.querySelectorAll('li');
    if (items.length === 0) {
        clearButton.style.display = 'none';
        itemFilter.style.display = 'none';
    }
    else {
        clearButton.style.display = 'block';
        itemFilter.style.display = 'block';
    }

    formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    formBtn.style.backgroundColor = '#333';

    isEditMode = false;

}
// Function to Clear UI

// Function to Filter Items
function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        }
        else {
            item.style.display = 'none';
        }
    })
}
// Function to Filter Items

// Initialize app
function init() {

    itemForm.addEventListener('submit', addItems);
    itemList.addEventListener('click', onClickRemove);
    clearButton.addEventListener('click', clearAllItems);
    itemFilter.addEventListener('input', filterItems)
    document.addEventListener('DOMContentLoaded', disaplyItems)
    checkUI();
}
init();