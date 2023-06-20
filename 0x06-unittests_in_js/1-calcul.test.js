const assert = require('assert');
const {it, describe } = require("mocha");
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
	it('should return sum of two rounded numbers', () => {
		assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
	});

	it('should return difference of two numbers', () => {
		assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
	});

	it('should return division of two rounded numbers', () => {
		assert.strictEqual(calculateNumber('DIVIDE', 4.6, 1.8), 2.5);
	});

	it('should return division of two numbers', () => {
		assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
	});

	it('should return division of two numbers', () => {
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
	});
});
