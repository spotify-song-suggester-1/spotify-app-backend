const server = require('express');
const router = server.Router();
const bcrypt = require('bcryptjs');
const Users = require('../database/db-helpers.js');
const jwt = require('jsonwebtoken');


router.post('/register', (req, res) => {

    let user = req.body;

    const hash = bcrypt.hashSync(user.password,10);
    user.password = hash;

    Users.add(user)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(error => {
            res.status(500).json(error);

        });

});

router.post('/login', (req, res) => {

    let {username, password} = req.body;

    Users.findBy({username})
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){

                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token
                })
            } else {
                res.status(401).json({message: 'Invalid Credentials'})
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });

});


function generateToken(user){

    const payload = {
        subject: user.id,
        username: user.username
    };

    const secret = 'kJHDJSAJSDJSKDFJDJFKDSNKLS9';
    const options ={
        expiresIn: '2h',
    };
    return jwt.sign(payload, secret, options)
}
  
 module.exports = router; 