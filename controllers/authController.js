const User = require('../models/user');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');


// @route - GET api/auth
// @desc - Get logged in user
// @access - private

const getAuth = async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); // don't want to return the password
        res.json(user)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}


// @route - POST api/auth
// @desc - authenticate user and get token
// @access - Public
const create = async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body

    try {
        let user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }
        // compares the plain text password and the hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token) => {
            if(err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}

module.exports = {
    getAuth,
    create
}