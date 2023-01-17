'use strict';

const Book = function(title, author) {
	this.title = title;
	this.author = author;
}

Book.prototype.buy = function() {
	console.log('Buy');
}

const AudioBook = function(title, author, lenMin) {
	Book.call(this, title, author);
	this.lenMin = lenMin;
}

AudioBook.prototype = Object.create(Book.prototype);
AudioBook.prototype.constructor = AudioBook;
AudioBook.prototype.log = function() {
	console.log(`${this.title} - ${this.lenMin}`);
}

const book = new AudioBook('Lord Of The Rings', 'Tolkien', 20 * 60);
book.log();
book.buy();
console.log(book);

console.log(book instanceof AudioBook);
console.log(book instanceof Book);