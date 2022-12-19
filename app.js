'use strict';

const max = 2**53 -1
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(max);
console.log(max + 1);
console.log(max + 2);
console.log(max + 3);

console.log(2342342343524623465745345345n);
console.log(BigInt(2342342343524623465745345345));
console.log(BigInt('2342342343524623465745345345'));

console.log(10n + 10n);
console.log(10n + BigInt(10));
console.log(10n * 10n);
console.log(2342342343524623465745345345n * 2342342343524623465745345345n);

console.log(10n * BigInt(10));
console.log(10n / 3n);
console.log(10 / 3);


console.log(10n < 20);
console.log(10n == 10);
console.log(10n === 10);
console.log(typeof 10n);