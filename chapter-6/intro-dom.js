console.log(window);
console.log(window.document);
console.log(document);
console.log(document.body);
console.log(document.body.innerHTML);
console.log(document.links[0]);

// document.body.innerHTML = '<h1>Something</h1>';
// document.write('Hello from JS');

console.log(document.getElementById('main'));
const main = document.getElementById('main');
main.innerHTML = '<h1>Hello From Main</h1>';

document.querySelector('#main h1').innerText = 'Hello';
