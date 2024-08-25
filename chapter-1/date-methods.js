let x;

let d = new Date();

x = d.toString();
console.log(x);

x = d.getTime();
console.log(x);

x = d.valueOf();
console.log(x);

x = d.getFullYear();
console.log(x);

x = d.getMonth();
console.log(x);

x = d.getMonth() + 1;
console.log(x);

x = d.getDate();
console.log(x);

x = d.getDay();
console.log(x);

x = d.getHours();
console.log(x);
x = d.getMinutes();
console.log(x);
x = d.getMilliseconds();
console.log(x);

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(x);

x = Intl.DateTimeFormat('en-US').format(d);
console.log(x);
x = Intl.DateTimeFormat('default').format(d);
console.log(x);

x = d.toLocaleDateString('default', {month:'short'});
console.log(x);