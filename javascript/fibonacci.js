function fibonnaci(n) {
	if (n <= 0) {
		console.log('The number should be positive integer');
		return;
	}
	let a = 0,
		b = 1,
		c;

	let sum = 0;
	for (let i = 2; i < n; i++) {
		c = a + b;
		a = b;
		b = c;

		if (c % 2 === 0 && c < n) {
			sum += c;
		}
	}
	return sum;
}

console.log(fibonnaci(100));
