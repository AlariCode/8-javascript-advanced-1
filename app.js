'use strict';
/*
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
}*/

class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}

	buy() {
		console.log('Buy');
	}
}

class AudioBook extends Book {
	constructor(title, author, lenMin) {
		super(title, author);
		this.lenMin = lenMin;
	}

	log() {
		console.log(`${this.title} - ${this.lenMin}`);
	}
}

const book = new AudioBook('Lord Of The Rings', 'Tolkien', 60*20);
book.log();
book.buy();