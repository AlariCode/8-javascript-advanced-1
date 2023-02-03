'use strict';

const wrapper = document.querySelector('.wrapper')
console.log(wrapper)

const inner = wrapper.querySelector('.inner');
const button = inner.querySelector('.button');
console.log(inner);
console.log(inner.childNodes);
console.log(inner.children);

console.log(inner.parentElement);
console.log(inner.parentNode);

console.log(button.closest('.wrapper'));

console.log(button.previousElementSibling)
console.log(button.previousSibling)
console.log(button.nextElementSibling)
console.log(button.nextSibling)

console.log(button.parentElement.children)