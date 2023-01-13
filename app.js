'use strict';

const Book = function(title, author) {
	this.author = author;
	this.title = title;
}
Book.prototype.isRead = false;

const lordOfTheRings = new Book('1', '1');

console.log(lordOfTheRings.hasOwnProperty('title'));

console.log(Book.prototype.__proto__);
