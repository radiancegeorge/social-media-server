const express =  require('express');
const registration = express.Router();
const bcrypt = require('bcrypt');
const cors = require('cors');
const db =  require('./db');
const uuid = require('uuid').v1

registration.use(cors())
registration.use(express.json())

registration.post('/', (req, res)=>{
    const {id, password} = req.body
    //check if id already exhists in the database
    let sql = `select * from user_credential where username = ?`;
    db.query(sql, id, (err, result)=>{
        if(err)throw err;
        if(result.length > 0){
            //user found..
            // return already exist
            res.status(409).send()
        }else{
            //no such user.. 
            //create user
            let sql = `insert into user_credential (id, username, password) value (?, ? , ?)`;
            bcrypt.hash(password, 10)
            .then(hashed =>{
                db.query(sql, [uuid(), id, hashed], (err, result) => {
                    if (err) throw err;
                    //return status 200;
                    res.status(200).send()
                })
            })
        }
    })  
})
module.exports = registration;