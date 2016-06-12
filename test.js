'use strict';

var expect = require('expect.js'),
	plugin = require('./lib');

describe('Express', function() {
	var app = {
		httpServer: {
			addRequestListener: function() {}
		}
	};

	before(function() {
		plugin.register(app);
	});

	it('check httpApp', function() {
		expect(app.httpApp).to.be.ok();
		expect(app.httpApp).to.have.property('use');
		expect(app.httpApp).to.have.property('get');
	});
});
