(function () {

	'use strict';

	var expect = chai.expect;

	describe('Current url', function () {

		it('getAll() should not be an empty object', function () {
			var parsedUrl = new Extractify();
			expect(parsedUrl.getAll()).to.be.an('object');
		})

		it('get() should return a string', function () {
			var parsedUrl = new Extractify();
			expect(parsedUrl.get('protocol')).to.be.a('string');
		})
	})

	describe('Query parameters', function () {
		it('Should return an object', function () {
			var parsedUrl = new Extractify();
			expect(parsedUrl.getParsedQueryParameters('name=joao&age=33')).to.be.an('object')
		})

		it('Should have property name', function () {
			var parsedUrl = new Extractify();
			expect(parsedUrl.getParsedQueryParameters('name=joao&age=33')).to.have.property('name')
		})
	})


}.call(this));