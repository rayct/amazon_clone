const express = require('express');

const authRouter = express.Router();

authRouter.post('/api/signup', (req, res) => {
    // Get the data from the client
    const { name, email, password } = req.body;

    
    // post that data into database

    // return that data to the user
});

module.exports = authRouter;
