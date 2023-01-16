'use strict';

const User = {
	init(email, password) {
		this.email = email;
		this.password = password;
	},
	log() {
		console.log('Log');
	}
};

const user = Object.create(User);
user.log();
user.init('a@a.ru', '123');
console.log(user);

const admin = Object.create(user);
console.log(admin)
admin.log()
console.log(admin.email)
