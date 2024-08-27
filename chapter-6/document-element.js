let output;

// output = document.all;

// Eveythin in the HTML
output = document.documentElement;
console.log(output);

// Just head and the body
output = document.head;
console.log(output);
output = document.body;
console.log(output);

// To get the children element
output = document.head.children;
console.log(output);

// Getting the doctype
output = document.doctype;
console.log(output);

// Url
output = document.URL;
console.log(output);

// Getting forms
output = document.forms;
console.log(output);
output = document.forms[0];
console.log(output);
output = document.forms[0].method;
console.log(output);

// Changing ID
document.forms[0].id = 'new-id';