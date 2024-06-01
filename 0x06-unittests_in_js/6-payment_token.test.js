const { describe, it } = require('mocha');
const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

function asyncFunction(callback) {
	setTimeout(() => {
		callback("done");
	}, true);
}

describe("Async Test", function() {
	it("should return true", function(done) {
		asyncFunction(function(result) {
			expect(result).to.equal("done");
			done();
		});
	});
});
