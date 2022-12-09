'use strict';
/* Необходимо поменять местами ключи и значения в следующем Map */
let weatherMap = new Map([
	['London', 10],
	['Moscow', 7],
	['Paris', 14],
]);

weatherMap = new Map([...weatherMap].map(el => el.reverse()));
console.log(weatherMap);