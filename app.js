'use strict';
/* Абстракция VS Инкапсуляция
	- Название
	- Режисёр
	- Наш рейтинг
	- Длительность
	- Страна производства
	- Актёры
	- Трейлер
	...
*/

class Film {
	#name;
	#author;
	rating;
	#length;

	constructor(name, author, length) {
		this.#name = name;
		this.#author = author;
		this.#length = length;
	}

	get name() {
		return this.#name;
	}

	get author() {
		return this.#author;
	}

	get length() {
		return this.#length;
	}
}

const film = new Film('Avatar', 'Cameron', 240)
console.log(film);