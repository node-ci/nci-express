'use strict';

var express = require('express'),
	bodyParser = require('body-parser');

exports.register = function(app) {
	app.express = express();

	app.express.disable('x-powered-by');
	app.express.use(bodyParser.json());
	app.express.use(bodyParser.urlencoded({extended: false}));

	app.httpServer.addRequestListener(app.express);
};
