const SockJS = require('sockjs-client-node');
const Stomp = require('stompjs');

// Import sock js stuff
// const sockjs = require('sockjs');
const sockConnect = require('../../sockConnect');

require('dotenv').config({ path: '../../../vars.env' });

exports.tourView = (req, res) => {
	// console.log(req.stomp);

	res.render('arViews/tourView', { enableAr: true, enableD3: true });
};

// Can be deleted P.S. delete the template too
exports.testRoute = (req, res) => {
	// req.stomp.init();

	res.render('arViews/testRoute', { message: 'd3 test page', enableD3: true });
};

exports.apiTest = (req, res) => {
	res.render('arViews/api', { message: 'Api test page', data: stomp.data });
};

// Connect to stomp data stream (sockets)
exports.getApiData = (req, res, next) => {
	// req.stomp = stomp;

	// const echo = sockjs.createServer({
	// 	sockjs_url: '../../../public/scripts/vendor/sockjs-client.v1.min.js',
	// });

	// // console.log(stomp);

	// const stompy = JSON.stringify(stomp);
	// console.log(stompy);
	// console.log('REQ', req.echo);

	sockConnect(req.echo);

	next();
};
