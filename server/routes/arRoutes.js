const express = require('express');
const arController = require('../controllers/arController');

const router = express.Router();

router.get('/', arController.getApiData, arController.tourView);
router.get('/test', arController.getApiData, arController.testRoute);

module.exports = router;
