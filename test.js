'use strict';

var expect = require('expect.js'),
	plugin = require('./lib');

describe('Express plugin', function() {
	var app = {
		httpServer: {
			addRequestListener: function() {}
		}
	};

	before(function() {
		plugin.register(app);
	});

	it('app should expose express', function() {
		expect(app.express).to.be.ok();
		expect(app.express.use).to.be.a('function');
		expect(app.express.get).to.be.a('function');
	});
});
