'use strict';

async function getProducts() {
	// fetch('https://dummyjson.com/products')
	// 	.then(response => response.json())
	// 	.then(data => console.log(data))
	const productsResponse = await fetch('https://dummyjson.com/products');
	const { products } = await productsResponse.json();
	console.log(products);

	const productResponse = await fetch('https://dummyjson.com/products/' + products[0].id);
	const product = await productResponse.json();
	console.log(product);
}

getProducts();
console.log('End');