const allPower = '/exchange/power/#';

const SockJS = require('sockjs-client-node');
const Stomp = require('stompjs');

require('dotenv').config({ path: '../../vars.env' });

exports.tourView = (req, res) => {
	console.log(req.stomp);

	res.render('arViews/tourView', { enableAr: true, enableD3: true });
};

// Can be deleted P.S. delete the template too
exports.d3Tests = (req, res) => {
	req.stomp.init();
	res.render('arViews/d3', { message: 'd3 test page', data: req.stomp.data, enableD3: true });
};

exports.apiTest = (req, res) => {
	res.render('arViews/api', { message: 'Api test page', data: stomp.data });
};

// Connect to stomp data stream (sockets)
exports.getApiData = (req, res, next) => {
	const stomp = {
		url: new SockJS('https://app.jouliette.net/stomp'),
		client: null,
		data: [],
		init() {
			this.client = Stomp.over(this.url);
			this.client.connect(
				process.env.USERNAME,
				process.env.PASSWORD,
				this.onConnect,
				console.error,
				'/'
			);
		},
		onConnect() {
			console.log('connected');
			stomp.client.subscribe(allPower, stomp.onData);
		},
		onData(d) {
			// console.log('data');
			stomp.data.push(d.body);
			// console.log(stomp.data);
		},
	};

	// stomp.init();

	req.stomp = stomp;
	next();
};
