const express = require('express');
const arController = require('../controllers/arController');
const sockjs = require('sockjs');
const Stomp = require('@stomp/stompjs');

const router = express.Router();
const client = Stomp.client('ws://stomp.spectral.energy:15674/ws');
const allPower = '/exchange/power/#';

require('dotenv').config({path:'./vars.env'});

client.connect(process.env.USERNAME, 'mnwdTGgQu5zPmSrz', onConnect, console.error, '/');
// client.connect('web', 'mnwdTGgQu5zPmSrz', onConnect, console.error, '/');


function onConnect(someStuff) {
  // console.log('data', someStuff);
  console.log(allPower, someStuff);
  client.subscribe(allPower, onData(someStuff));
};

function onData(data) {
  console.log(data.body);
  // data = JSON.parse(data.body);
};

// const echo = sockjs.createServer({ sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js'});
// echo.on('connection', function(connec) {
//   connec.on('data', function(message){
//     connec.write(message);
//     console.log(message);
//   });
//   connec.on('close', function() {
//     console.log('closed');
//   });
// });

router.get('/', arController.apiTest);


module.exports = router;
