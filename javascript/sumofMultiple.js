function sumMultiple(num) {
	let sum = 0;
	let values = [];
	for (let i = 1; i < num; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			values.push(i);
			sum += i;
		}
	}
	return { values, sum };
}

console.log(sumMultiple(1000));
