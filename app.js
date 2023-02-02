'use strict';

console.log(document.head);
console.log(document.body);

const el = document.querySelector('.wrapper');
const el2 = document.querySelectorAll('meta');
console.log(el);
console.log(el2);
const el3 = document.getElementsByClassName('wrapper');
const el4 = document.getElementsByTagName('meta');
console.log(el3);
console.log(el4);

const button = document.createElement('button');
button.innerHTML = 'тест';

const button2 = document.createElement('button');
button2.innerHTML = 'тест2';

el.append(button);
// el.prepend(button2);
// el.before(button2);
el.after(button2);

function generate() {
	console.log(el.parentNode);
	el.remove();
}
