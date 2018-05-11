const http = require('http');
const server = http.createServer();

function sockConnect(echo) {
	echo.on('connection', function(connec) {
		connec.on('data', function(message) {
			connec.write(message);
			console.log(message);
		});
		connec.on('close', function() {
			console.log('closed');
		});
	});

	echo.installHandlers(server, { prefix: '/echo' });

	server.listen(9999, '0.0.0.0');
}

module.exports = sockConnect;
