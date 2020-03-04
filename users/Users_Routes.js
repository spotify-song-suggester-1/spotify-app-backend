const server = require('express');
const Users = require('../database/db-helpers.js');


const router = server.Router();

router.get('/',(req, res)=> {
   
   Users.find()
   .then(users => {
       res.json(users);
   })
   .catch(err => {
        res.status(500).json({err: 'failed to get users'})
   });
});

router.get('/:id',(req, res)=>{

    const {id} =  req.params;
    Users.findById(id)
        .then(user => {
            res.json(user);
        })
        .catch(error => {
            res.status(500).json({err: 'failed to ger user with given id'})
        })

});




module.exports = router;

