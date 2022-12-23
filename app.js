'use strict';

const date1 = new Date(2024, 10, 15);
const date2 = new Date(2024, 11, 15);
console.log(Number(date1));
console.log(date2 - date1);

function getDaysBetweenDates(dateFirst, dateSecond) {
	return (date2 - date1) / (1000 * 60 * 60 * 24);
}

console.log(getDaysBetweenDates(date1, date2));