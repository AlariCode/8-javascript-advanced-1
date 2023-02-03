'use strict';

const button = document.querySelector('.button');

const eventHandler = function (event) {
	console.log('Event 1');
}

button.addEventListener('mouseover', eventHandler);
button.addEventListener('click', (event) => {
	console.log('Event 2');
	button.removeEventListener('click', eventHandler);
});