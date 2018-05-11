const http = require('http');
const server = http.createServer();

const SockJS = require('sockjs-client-node');
const Stomp = require('stompjs');

function sockConnect(echo) {
	console.log(echo);

	echo.on('connection', function(connec) {
		console.log('connected');

		// connec.write(stomp);
		connect();
		// console.log(stomp.init);

		// stomp.init();

		connec.on('data', function(message) {
			console.log('On data', message);
			connec.write(message);
			// sock.close();
		});

		connec.on('close', function() {
			console.log('closed');
		});

		function connect() {
			console.log('STOMP');

			const endpoint = '/exchange/power/#';

			const stomp = {
				url: new SockJS('https://app.jouliette.net/stomp'),
				client: null,
				data: [],
				init: function() {
					this.client = Stomp.over(this.url);
					this.client.connect(
						process.env.USERNAME,
						process.env.PASSWORD,
						this.onConnect,
						this.onError,
						'/'
					);
				},
				onError(err) {
					console.error('Error incoming: ', err);
				},
				onConnect() {
					console.log('Connected');
					stomp.client.subscribe(endpoint, stomp.onData);
				},
				onData(d) {
					// console.log(d);
					stomp.data.push(d.body);
					connec.write(d.body);
				},
			};

			stomp.init();
		}
	});

	echo.installHandlers(server, { prefix: '/echo' });
}

server.listen(9999, '0.0.0.0');

module.exports = sockConnect;
