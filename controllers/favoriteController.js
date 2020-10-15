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
const create = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { teamName } = req.body;

    try {
        const newFavorite = new Favorite({
            teamName,
            user: req.user.id
        });

        const fave = await newFavorite.save();
        res.json(fave)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const deleteFave = async (req, res) => {
    try {
        let favorite = await Favorite.findById(req.params.id);

        if(!favorite) return res.status(404).json({ msg: 'Favorite not found'});

        //Make sure user owns favorite
        if (favorite.user.toString() !== req.user.id) {
            return res.status(401).json({msg: 'Not authorized'})
        }

        await Favorite.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Favorite Removed'})
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}

module.exports = {
    getFavs,
    create,
    deleteFave
}