let output;
// Get child elements

const parent = document.querySelector('.parent');
console.log(parent);

output = parent.children;
console.log(output);

output = parent.children[0].innerText;
console.log(output);
output = parent.children[1].className;
console.log(output);
output = parent.children[0].nodeName;
console.log(output);

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get Parents element from a child
const child = document.querySelector('.child');
output = child.parentElement;
console.log(output)
child.parentElement.style.border = '1px solid black';
child.parentElement.style.padding = '20px 20px';

// Sibling Elements
const secondItem = document.querySelector('.child:nth-child(2)');
console.log(secondItem);

output = secondItem.nextElementSibling;
console.log(output);
secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'blue';

