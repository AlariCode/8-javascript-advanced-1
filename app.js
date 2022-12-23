'use strict';

/* 
	Таймер пиццы
	Сделать таймер пиццы (функцию, принимающую время),
	который будет выводить в консоль секунды,
	оставшиеся до готовности пиццы и сообщение по готовности.
	00:04
	00:03
	00:01
	00:00
	🍕!!!
*/

function pizzaTimer(ms) {
	const end = new Date().getTime() + ms;
	const interval = setInterval(() => {
		console.log(
			new Intl.DateTimeFormat('ru-RU', {
				minute: 'numeric',
				second: 'numeric'
			}).format(end + 100 - new Date())
		);
	}, 1000);
	setTimeout(() => {
		clearInterval(interval);
		console.log('🍕!!!');
	}, ms)
}

pizzaTimer(5000);

