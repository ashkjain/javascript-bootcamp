let x = new Date();

console.log(x);
console.log(typeof x);

d = new Date(2023, 0, 20); // Temporary new date
console.log(d);

d = new Date('2021-07-10');
console.log(d);

d = new Date('2021-07-10T12:30:00');
console.log(d);

// Timestamp
d = Date.now();
console.log(d);

d = new Date('07-10-2022 12:30:00');
d = d.getTime();
console.log(d);

//  Date from timestamp
let stamp = Date.now();
d = new Date(stamp);
console.log(d);

// Milliseconds to seconds

d = Math.floor(Date.now() / 1000);
console.log(d);