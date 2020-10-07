const User = require('../models/user');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//@route POST api/users
//description - register a user
//access - Public
const create = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body; 

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        user = new User({
            name,
            email, 
            password
        });

        // salt is needed to encrypt the password / genSalt returns a promise so await is needed
        const salt = await bcrypt.genSalt(10); // this encrypts/hash the password

        // plain text password will be hashed
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        // object we want to send in the token
        // with the user id, we can access what ever data is saved from the user
        const payload = {
            user: {
                id: user.id
            }
        }

        // to generate a token, we have to sign it
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token) => {
            if(err) throw err;
            res.json({ token });
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }
}



module.exports = {create}