'use strict';

function req(id) {
	const request = new XMLHttpRequest();
	request.open('GET', 'https://dummyjson.com/products/' + id);
	request.send();

	request.addEventListener('load', function() {
		const data = JSON.parse(this.responseText);
		console.log(data);
	});
}

req(1);
req('');
req(3);


console.log('end');