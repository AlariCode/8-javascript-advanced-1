'use strict';
/*
	Сделать класс врага со здоровьем и методом получения урона
	Сделать класс меча, которые имеет силу и методу нанесения
	урона.
	Сделать класс орка, который в 50% случаев не получает урон.
*/

class Enemy {
	health;
	constructor(health) {
		this.health = health;
	}

	recieveDamage(damage) {
		this.health = this.health - damage;
		console.log(this.health);
	}
}

class Sword {
	#damage;
	constructor(damage) {
		this.#damage = damage;
	}

	strike(enemy) {
		enemy.recieveDamage(this.#damage);
	}
}

class Orc extends Enemy {
	recieveDamage(damage) {
		if(Math.random() > 0.5) {
			this.health = this.health - damage;
		}
		console.log(this.health);
	}
}

class Troll extends Enemy {
	
}

const enemy = new Orc(10);
const enemy2 = new Troll(20);
const sword = new Sword(3);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy2);
sword.strike(enemy2);
sword.strike(enemy2);