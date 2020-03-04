require('dotenv').config();

const express = require('express');

const userRoutes = require('./users/Users_Routes');
const authRoutes = require('./auth/Auth_routes');



const server = express();

//middlewares
server.use(express.json());
server.use('/api/users', userRoutes);
server.use('/api/auth', authRoutes);


//read dynamically from enviroment
const port = process.env.PORT;

server.get('/',(req, res)=> {
     res.send('API up and running');
});

//custom middleware
server.use(function (req, res){
    res.status(404).send("Endpoint requested not found");
});


server.listen(port, () => {
    console.log(`Server running at ${port}/`);
});