const express = require('express');
const User = require('../models/user');

const authRouter = express.Router();

authRouter.post('/api/signup', async (req, res) => {
    // Get the data from the client
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.json({msg: 'User with the same email already exists!'})
    }
    // post that data into database
    // return that data to the user
});

module.exports = authRouter;
