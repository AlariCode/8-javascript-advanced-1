'use strict';

fetch('https://dummyjson.com/productss')
	.then(
		response => {
			console.log(response);
			return response.json()
		}
	)
	.then(({ products }) => {
		console.log(products);
		return fetch('https://dummyjson.com/products/' + products[0].id)
		}
	)
	.then(response => response.json())
	.then(data => {
		console.log(data)
	})
	.catch(error => console.log(error))
	.finally(() => {
		console.log('Finally')
	});