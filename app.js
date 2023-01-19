'use strict';

class Weapon {
	cost;

	dealDamage() {

	}
}

class Rifle extends Weapon {
	shoot() {
		this.dealDamage()
	}
}

class Sword extends Weapon {
	strike() {
		this.dealDamage()
	}
}