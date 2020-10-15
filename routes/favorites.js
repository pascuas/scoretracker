const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const favoriteController = require('../controllers/favoriteController');
const { check } = require('express-validator');

router.get('/', auth, favoriteController.getFavs);
router.post('/', [ auth, [
    check('teamName', 'Name is required').not().isEmpty()
]], favoriteController.create);


module.exports = router

