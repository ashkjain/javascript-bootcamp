let output;

const parent = document.querySelector('.parent');
output = parent.childNodes;
console.log(output);

output = parent.childNodes[0];
console.log(output);
output = parent.childNodes[0].textContent;
console.log(output);
output = parent.childNodes[0].nodeName;
console.log(output);
output = parent.childNodes[3].nodeName;
console.log(output);
output = parent.childNodes[3].innerHTML;
console.log(output);
output = parent.childNodes[3].outerHTML;
console.log(output);
output = parent.childNodes[3].innerText = 'Child One';
console.log(output);
output = parent.childNodes[5].style.color = 'red';
console.log(output);
output = parent.firstChild;
console.log(output);
output = parent.firstLast;
console.log(output);

parent.lastChild.textContent = 'Hello';

// Parent Node
const child = document.querySelector()