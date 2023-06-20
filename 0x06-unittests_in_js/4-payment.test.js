const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const {describe, it} = require('mocha');
const assert = require('assert');

describe('sendPaymentRequestToApi', () => {
	it('should use Utils.calculateNumber to perform math', () => {
		const stub = sinon.stub(Utils, 'calculateNumber');
		const spy = sinon.spy(console, 'log');
		stub.withArgs('SUM', 100, 20).returns(120);

		sendPaymentRequestToApi(100, 20);

		sinon.assert.calledOnce(stub);
		sinon.assert.calledWithExactly(stub, 'SUM', 100, 20);
		sinon.assert.calledWith(spy, 'The total is: 120');


		stub.restore();
		spy.restore();
	});
});
