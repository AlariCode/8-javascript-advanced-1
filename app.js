'use strict';

async function gatAllProducts() {
	const response = await fetch('https://dummyjson.com/products');
	return response.json();
}

async function getProduct(id) {
	const response = await fetch('https://dummyjson.com/products/' + id);
	return response.json();
}

async function getProductError(id) {
	const response = await fetch('https://dummyjsons.com/products/' + id);
	return response.json();
}

async function main() {
	const { products } = await gatAllProducts();
	const res = await Promise.all(products.map(product => getProduct(product.id)));
	console.log(res)
	// for (const product of products) {
	// 	const res = await getProduct(product.id);
	// 	console.log(res);
	// }
}

main();