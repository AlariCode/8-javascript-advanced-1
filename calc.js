'use strict';

const APP = {};

(function() {
	const a = 1;
	function add(f, s) {
		return f + s;
	}

	function sub(f, s) {
		return f - s;
	}

	APP.calc = {
		add,
		sub
	}
})();


