const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');
const auth = require('../middleware/auth')

router.get('/', auth, authController.getAuth)

router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Passowrd is require').exists()
], authController.create)



module.exports = router;