'use strict';

class ProductRepository {
	async getProducts() {
		const response = await fetch('https://dummyjson.com/products');
		console.log(await response.json());
	}
}

const repo = new ProductRepository();
repo.getProducts();

const asyncArrow = async () => {
	const response = await fetch('https://dummyjson.com/products');
		console.log(await response.json());
}

asyncArrow();