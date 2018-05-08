const express = require('express');
const arController = require('../controllers/arController');

const router = express.Router();

router.get('/', arController.homePage);

module.exports = router;
