'use strict';

var express = require('express'),
	bodyParser = require('body-parser');

exports.register = function(app) {
	var httpApp = express();

	httpApp.disable('x-powered-by');
	httpApp.use(bodyParser.json());
	httpApp.use(bodyParser.urlencoded({extended: true}));

	app.httpServer.addRequestListener(httpApp);
	app.httpApp = httpApp;
};
