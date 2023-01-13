'use strict';

/*
	Реализовать на функциях и прототипах корзину товаров с методами
	- Добавить товар
	- Увеличить число товаров
	- Уменьшить число товаров (удалить если их 0)
*/
const product = { id: 1, name: 'Bread', count: 1 };

const Cart = function() {
	this.products = [];
}
Cart.prototype.addProduct = function(product) {
	if (this.products.find(product => product.id === product.id)) {
		return;
	}
	this.products.push(product);
}

Cart.prototype.increaseAmount = function(id) {
	this.products = this.products.map(product => {
		if (product.id == id) {
			product.count++;
			return product;
		}
		return product;
	})
}

Cart.prototype.decreaseAmount = function(id) {
	this.products = this.products
		.map(product => {
			if (product.id == id) {
				product.count--;
				return product;
			}
			return product;
		})
		.filter(product => product.count > 0);
}

const cart = new Cart();
cart.addProduct(product);
cart.increaseAmount(1);
cart.decreaseAmount(1);
cart.decreaseAmount(1);
console.log(cart)

const cart2 = new Cart();
cart2.addProduct(product);
console.log(cart2)
