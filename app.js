'use strict';

const Book = function(title, author) {
	this.author = author;
	this.title = title;
	this.isRead = false;
}
Book.prototype.read = function() {
	this.isRead = true;
};

class BookClass {
	isRead = false;

	constructor(title, author) {
		this.author = author;
		this.title = title;
	}

	read() {
		this.isRead = true;
	}
}

const lotr = new BookClass('lotr', 'Tolkien');
console.log(lotr);
console.log(lotr instanceof BookClass);
lotr.read();
console.log(lotr.__proto__);
