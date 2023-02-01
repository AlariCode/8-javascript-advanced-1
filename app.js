'use strict';

/*
	Сделать генератор 3х идей от скуки
	https://www.boredapi.com/api/activity
	с отображением на странице
*/
const wrapper = document.querySelector('.wrapper');

async function getActivity() {
	const res = await fetch('https://www.boredapi.com/api/activity');
	return res.json();
}

async function generate() {
	try {
		wrapper.innerHTML = '';
		const data = await Promise.all([
			getActivity(),
			getActivity(),
			getActivity(),
		]);
		console.log(data);
		for (const el of data) {
			const element = document.createElement('div');
			element.innerHTML = `${el.activity}`;
			wrapper.appendChild(element);
		}
	} catch(e) {
		console.error(e);
	}
}