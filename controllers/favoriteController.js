const Favorite = require('../models/favorites');
const User = require('../models/user');
const { validationResult } = require('express-validator');

//@route - GET api/favorites
//@desc - get all favorites
//@access - Private
const getFavs = async (req, res) => {
    try {
        const favorites = await Favorite.find({ user: req.user.id});
        res.json(favorites)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}

//@route - POST api/favorites
//@desc - Add a favorite
//@access - private
const create = (req, res) => {
    res.send("add favorite")
}

module.exports = {
    getFavs
}