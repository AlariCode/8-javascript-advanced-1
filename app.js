'use strict';

const now = new Date();
console.log(now);

console.log(new Date('02-01-2023'));
console.log(new Date('02/01/2023'));
console.log(new Date('2023/01/02'));
console.log(new Date('10 Jan 2023'));
console.log(new Date('10 янв 2023'));
console.log(new Date('Dec 22 2022 20:40:03'));

console.log(new Date(2024, 11, 31, 10, 5, 10));
console.log(new Date(2024, 12, 10 + 100));
console.log(new Date(0));
console.log(new Date(1 * 24 * 60 * 60 * 1000));
console.log(Date.now());
console.log(new Date(Date.now()));

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

console.log(new Date(now.setFullYear(2030)));
console.log(new Date(now.setMonth(10)));