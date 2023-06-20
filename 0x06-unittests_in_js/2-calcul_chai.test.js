const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');
const {describe, it} = require('mocha');

describe('calculateNumber', function() {
	describe('SUM', () => {
		it('should return sum of rounded numbers', () => {
			expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
		});
	});

	describe('SUBTRACT', () => {
		it('should return difference of two rounded numbers', () => {
			expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
		});
	});

	describe('DIVIDE', () => {
		it("checking if numbers round", function() {
			expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
		});
		it('should return division of two rounded numbers', () => {
			expect(calculateNumber('DIVIDE', 4.6, 1.8)).to.equal(2.5);
		});

		it('should return "Error" if rounded value of b is 0', () => {
			expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
		});
	});
});
