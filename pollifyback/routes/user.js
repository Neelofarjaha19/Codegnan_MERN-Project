const router = require('express').Router();
const { User } = require('../models/schema');

router.get('/', async(req, res) => {
    return res.status(200).json(await User.find());
});

router.delete('/:id', async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json("deleted successful")
});

module.exports = router;