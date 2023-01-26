'use strict';

const prom = new Promise((resolve) => {
	console.log('Constuctor');
	// for (let i = 0; i< 10000000000; i++) {}
	setTimeout(() => {
		resolve('Timer');
	}, 1000);
})
prom.then(data => console.log(data));

Promise.reject(new Error('Error')).catch(error => console.error(error));
Promise.resolve('Instant').then(data => console.log(data));