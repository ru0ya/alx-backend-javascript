const Utils = {
	calculateNumber: (type, a, b) => {
		if (type === 'SUM') {
			return Math.round(a) + Math.round(b);
		} else if (type === 'SUBTRACT') {
			return Math.round(a) - Math.round(b);
		} else if (type === 'DIVIDE') {
			if (Math.round(b) === 0) {
				return 'Error';
<<<<<<< HEAD
=======
			} else {
				return Math.round(a) / Math.round(b);
>>>>>>> 3593505a2789098f8b7e01cec0412530a8c77294
			}
		}
	}
};

module.exports = Utils;
