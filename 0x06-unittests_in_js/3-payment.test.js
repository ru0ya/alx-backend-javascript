const sinon = require('sinon');
const Utils = require('utils');
const {  sendPaymentRequestToApi } = require('3-payment');

describe('sendPaymentRequestToApi', () => {
	it('should use Utils.calculateNumber to perform math', () => {
		const calcNumberSpy = sinon.spy(Utils, 'calculateNumber');

		sendPaymentRequestToApi(100, 20);

		sinon.assert.calledWithExactly(calcNumberSpy, 'SUM', 100, 20);

		calculateNumberSpy.restore();
	});
});
