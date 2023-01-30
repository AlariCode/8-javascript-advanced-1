'use strict';

async function getProduct(id) {
	const response = await fetch('https://dummyjson.com/products/' + id);
	return response.json();
}

async function getProductError(id) {
	const response = await fetch('https://dummyjsons.com/products/' + id);
	return response.json();
}

async function main() {
	const res1 = await Promise.all([
		getProduct(1),
		getProduct(2),
	]);
	console.log(res1);
	const res2 = await Promise.allSettled([
		getProduct(1),
		getProductError(2),
	]);
	console.log(res2);
	const res3 = await Promise.race([
		getProduct(1),
		getProductError(2),
	]);
	console.log(res3);
}

main();