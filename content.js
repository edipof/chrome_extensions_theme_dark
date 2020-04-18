(() => {
	let elements = document.body.getElementsByTagName("*");
	let body = document.body;
	body.style.backgroundColor = '#191919';
	for(let i = 0; i < elements.length; i++) {
		elements[i].style.background = '#191919';
		elements[i].style.color = 'lightgray';
	}
})();



