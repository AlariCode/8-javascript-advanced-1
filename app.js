'use strict';

class User {
	#role = 'user';

	getRole() {
		return this.#role;
	}
}

class Admin extends User {
	#role = ['user', 'admin'];

	getRole() {
		return this.#role.join(', ');
	}
}

function logRole(user) {
	console.log('Role: ' + user.getRole().toUpperCase());
}

logRole(new User());
logRole(new Admin());