const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');


function onInput(e)
{
    heading.textContent = e.target.value;
}
function onInput2(e)
{
    heading.textContent = e.target.value;
}

function onChecked(e)
{
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus()
{
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'green';

}
function onBlur()
{
    itemInput.style.outlineStyle = 'none';
    itemInput.style.outlineWidth = 'none';
    itemInput.style.outlineColor = 'black';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change',onInput2);
checkbox.addEventListener('input',onChecked);
itemInput.addEventListener('focus',onFocus);
itemInput.addEventListener('blur',onBlur);