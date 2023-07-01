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

	it('should respond with a 200 status code when :id is a number', function(done) {
		request(app)
		 .get('/cart/123')
		 .expect(200, done);
	});

	it('should respond with a 404 status code when :id is not a number', function(done) {
		request(app)
		 .get('/cart/abc')
		 .expect(404, done);
	});

	it('shoulld respond with the correct result when :id is a number', function(done) {
		request(app)
		 .get('/cart/abc')
		 .expect(404, done);
	});

	it('should respond with the correct result when :id is a number', function(done) {
		request(app)
		 .get('/cart/123')
		 .expect('Content-Type', /json/)
		 .end(function(err, res) {
			 if (err) {
				 return done(err);
			 }

	 		 expect(res.body.cartId).to.equal('123');
			 done();
		 });
	});

	it('should return a login message with username', function(done) {
		const userData = {
			userName: 'John'
		};

		request(app)
		 .post('/login')
		 .send(userData)
		 .expect('Content-Type', /json/)
		 .expect(200)
		 .end(function(err, res) {
			 if (err) {
				 return done(err);
			 }
			 expect(res.body.message).to.equal('Welcome, John!');
			 done();
		 });
	});

	it('should handle missing userName field', function(done) {
		const userData = {];

			request(app)
			 .post('/login')
			 .send(userData)
			 .expect('Content-Type', /json/)
			 .expect(400)
			 .end(done);
		});
	});
});
