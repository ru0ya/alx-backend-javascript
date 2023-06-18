function calculateNumber(type, a, b) {
	if (type === 'SUM') {
		return sum(Math.round(a), Math.round(b));
	}
	else if (type === 'SUBTRACT') {
		return Math.round(a) - Math.round(b);
	}
	else if (type === 'DIVIDE') {
		if (Math.round(b) === 0) {
			throw new Error('Error');
		}
		return Math.round(a) / Math.round(b);
	}
}

module.exports = calculateNumber;
