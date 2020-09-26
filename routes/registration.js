const express =  require('express');
const registration = express.Router();
const bcrypt = require('bcrypt');
const cors = require('cors');


registration.use(cors())
registration.use(express.json())

registration.post('/', (req, res)=>{
    const {id, password} = req.body
    //check if id already exhists in the database

    //if id does not exist then, hash password
    bcrypt.hash(password, 10)
        .then(hashed => {
            //add hashed and id to the database then return 200
        })
    
    res.status(200).send('done')
})

module.exports = registration;