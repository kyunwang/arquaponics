
const express = require('express');
const wController = require('../controllers/websiteController');

const router = express.Router();

router.get('/', wController.homePage);
<<<<<<< HEAD
router.get('/zeroState', wController.zeroState);
=======
router.get('/home', wController.infoPage);
>>>>>>> 60d388a4dbc9b0af9afc6c960724f27d8c346a79

module.exports = router;
