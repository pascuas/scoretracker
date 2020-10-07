const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const favoriteController = require('../controllers/favoriteController');

router.get('/', auth, favoriteController.getFavs)


module.exports = router

