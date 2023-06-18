function calculateNumber(a, b) {
	let roundedA = Math.round(a);
	let roundedB = Math.round(b);

	return sum(roundedA, roundedB);
}

module.exports calculateNumber;
