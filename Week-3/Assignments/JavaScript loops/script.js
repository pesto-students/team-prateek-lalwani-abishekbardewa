function drawTriangle(triangleSize) {
	// Your solution goes here
	for (let i = 0; i < triangleSize; i++) {
		let design = '';
		for (let j = 0; j <= i; j++) {
			design += ' * ';
		}
		console.log(design);
	}
}

drawTriangle(10);
