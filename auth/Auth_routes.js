const server = require('express');
const router = server.Router();
const bcrypt = require('bcryptjs');
const Users = require('../database/db-helpers.js');


router.post('/register', (req, res) => {

    let user = req.body;

    const hash = bcrypt.hasSynch(user.password,10);
    user.password = hash;

    Users.add(user)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(error => {
            res.status(500).json(error);

        });

});
  
 module.exports = router; 