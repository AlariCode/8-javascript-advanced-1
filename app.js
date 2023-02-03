'use strict';

function generate(event) {
	console.log(event.target.getBoundingClientRect());

	console.log(`X offset: ${window.pageXOffset}`);
	console.log(`Y offset: ${window.pageYOffset}`);
	console.log(`clientWidth: ${document.documentElement.clientWidth}`);
	console.log(`clientHeight: ${document.documentElement.clientHeight}`);

	const el = document.querySelector('.down');
	const rect = el.getBoundingClientRect();

	window.scrollTo({
		left: window.pageXOffset + rect.left,
		top: window.pageYOffset + rect.top,
		behavior: 'smooth'
	});
}