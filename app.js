'use strict';

let a = { a: 1 };
let b = { b: 2 };
const set = new WeakSet([a, b]);
a = null;
setTimeout(() => {
	console.log(set);
}, 1000);