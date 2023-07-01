const request = require('supertest');
const app = require('./api');
const { expect } = require('chai');

describe('Index Page', function() {
	it('should respond with a 200 status code', function(done) {
		request(app)
		 .get('/')
		 .expect(200, done);
	});

	it('should respond with the correct result', function(done) {
		request(app)
		 .get('/')
		 .expect('Content-Type', /json/)
		 .end(function(err, res) {
			 if (err) {
				 return done(err);
			 }

			 expect(res.body.message).to.equal('Welcome to the payment system');
			 done();
		 });
	});

	it('additional properties in the response', function(done) {
		request(app)
		 .get('/')
		 .end(function(err, res) {
			 if (err) {
				 return done(err);
			 }
		 expect(res.body).to.have.property('timestamp');
		 done();
		 });
	});
});
