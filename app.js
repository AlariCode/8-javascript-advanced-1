'use strict';

const options1 = {
	style: 'currency',
	currency: 'RUB'
}

const options2 = {
	style: 'currency',
	currency: 'USD'
}

const options3 = {
	style: 'decimal',
}

const options4 = {
	style: 'percent',
}

const options5 = {
	style: 'unit',
	unit: 'celsius',
}

console.log(new Intl.NumberFormat('ru-RU', options1).format(23000));
console.log(new Intl.NumberFormat('en-US', options2).format(23000));
console.log(new Intl.NumberFormat('ru-RU', options3).format(10000));
console.log(new Intl.NumberFormat('ru-RU', options4).format(0.1));
console.log(new Intl.NumberFormat('ru-RU', options5).format(25));