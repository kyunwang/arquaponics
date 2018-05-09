const express = require('express');
const arController = require('../controllers/arController');
const sockjs = require('sockjs');
// const Stomp = require('@stomp/stompjs');

const router = express.Router();
// const client = Stomp.client(process.env.THE_URL);
// const allPower = '/exchange/power/#';

const echo = sockjs.createServer({ sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js'});
echo.on('connection', function(connec) {
  connec.on('data', function(message){
    conn.write(message);
    console.log(message);
  });
  conn.on('close', function() {
    console.log('closed');
  });
});

router.get('/', arController.apiTest);

console.log(arController.apiTest);

module.exports = router;
