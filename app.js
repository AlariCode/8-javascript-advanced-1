'use strict';

class Test {
	static a = 1;
	static hello() {
		console.log('Hello');
	}

	static {
		let b = 5;
		this.a = 5;
	}
}
Test.hello();
console.log(Test.a);
