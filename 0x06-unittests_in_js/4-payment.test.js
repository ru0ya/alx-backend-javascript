const sinon = require('sinon');
const Utils = require('utils');
const {  sendPaymentRequestToApi } = require('3-payment');

describe('sendPaymentRequestToApi', () => {
	it('should use Utils.calculateNumber to perform math', () => {
		const calcNumberSpy = sinon.stub(Utils, 'calculateNumber');
		const consoleLogSpy = sinon.spy(console, 'log');
		calculateNumberStub.withArgs('SUM', 100, 20).returns(120);

		sendPaymentRequestToApi(100, 20);

		sinon.assert.calledOnce(calculateNumberStub);
		sinon.assert.calledWithExactly(calcNumberSpy, 'SUM', 100, 20);
		sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');


		calculateNumberStub.restore();
		consoleLogSpy.restore();
	});
});
