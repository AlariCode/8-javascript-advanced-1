'use strict';

const date = new Date();

console.log(date);
console.log(new Intl.DateTimeFormat('ru-RU').format(date));
const options1 = {
	hour: 'numeric',
	minute: 'numeric'
}
console.log(new Intl.DateTimeFormat('ru-RU', options1).format(date));
const options2 = {
	hour: 'numeric',
	minute: 'numeric',
	month: 'long',
	weekday: 'short',
	year: '2-digit'
}
console.log(new Intl.DateTimeFormat('en-US', options2).format(date));
console.log(new Intl.DateTimeFormat('ru-RU', options2).format(date));

console.log(navigator.language);
console.log(new Intl.DateTimeFormat(navigator.language, options1).format(date));
