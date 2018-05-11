const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

// Import sock js stuff
const sockjs = require('sockjs');
const sockConnect = require('./sockConnect');

const app = express();

// Import the helper file
const helpers = require('../public/scripts/helpers');

// Import routes
const routes = require('./routes');
const apiRoutes = require('./routes/data-api');
const arRoutes = require('./routes/arRoutes');

require('dotenv').config({ path: './vars.env' });

// Setting the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Set static route
app.use('/', express.static(path.join(__dirname, '../public')));
// app.use('/', express.static(path.join(__dirname, '../public'), { maxAge: '31d' })); // This will cache the folder for 31days

// Use bodyparser
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: false }));

// Add global middleware available in templates and all routes
app.use((req, res, next) => {
	res.locals.h = helpers;
	res.locals.enableAr = false;
	res.locals.enableD3 = false;
	next();
});

// Declare the routes here
app.use('/', routes);
app.use('/ar-tour', arRoutes);
app.use('/api', apiRoutes);

/*==========================
=== Make a connection to the sockJS client
===========================*/

// Connecting the sock socket connection
const echo = sockjs.createServer({
	sockjs_url: '../public/scripts/vendor/sockjs-client.v1.min.js',
});

sockConnect(echo);

// Listen to defined port
app.listen(process.env.PORT, function() {
	console.log('Listening to port: ', process.env.PORT);
});
