const expect = require('chai').expect;
const calculateNumber = require('1-calcul');

describe('calculateNumber', function() {
	describe('SUM' () => {
		it('should return sum of rounded numbers', () => {
			expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
		});
	});

	describe('SUBTRACT' () => {
		it('should return difference of two rounded numbers', () => {
			expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
		});
	});

	describe('DIVIDE' () => {
		it('should return division of two rounded numbers', () => {
			expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal('0.2');
		});

		it('should return "Error" if rounded value of b is 0', () => {
			expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
		});
	});
});
