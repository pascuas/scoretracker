const User = require('../models/user');
const { validationResult } = require('express-validator');

//@route POST api/users
//description - register a user
//access - Public
const create = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    res.send("Passed");
}



module.exports = {create}