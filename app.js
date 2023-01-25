'use strict';

/*
	Сделать функцию, которая принимает строку и текст ошибки и
	возвращает уже Promise с JSON из тела запроса
*/

function getData(url, errorMessage, method = 'GET') {
	return fetch(url, {
		method,
	})
	.then(response => {
		if (!response.ok) {
			throw new Error(`${errorMessage} ${response.status}`)
		}
		return response.json()
	})
}

getData('https://dummyjson.com/products', 'Can not get products')
	.then(({ products }) => {
		console.log(products);
		return getData('https://dummyjson.com/products/' + products[0].id, 'Can not get product')
	})
	.then(data => {
		console.log(data)
	})
	.catch(error => {
		const el = document.querySelector('.filter');
		el.innerHTML = error.message
	});