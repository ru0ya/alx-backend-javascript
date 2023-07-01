const sinon = require('sinon');
const expect = require('chai').expect;
const {describe, it} = require('mocha');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToAPI', () => {
	let consoleLogSpy;

	beforeEach("create spy on consol log before tests", function() {
		consoleLogSpy = sinon.spy(console, "log");
	});

	afterEach("restores spy on console log", function () {
		consoleLogSpy.restore();
	});

	it("should log the correct total for payment", function () {
		sendPaymentRequestToAPI(100, 20);

		expect(consoleLogSpy.withArgs("The total is: 120").calledOnce).to.be.true;
	});

	it("should log correct total for another payment", function () {
		sendPaymentRequestToAPI(10, 10);

		expect(consoleLogSpy.withArgs("The total is: 20").calledOnce).to.be.true;
	});
});
