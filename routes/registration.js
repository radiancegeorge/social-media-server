const express =  require('express');
const registration = express.Router();
const cors = require('cors')


registration.use(cors())
registration.use(express.json())

registration.post('/', (req, res)=>{
    console.log(req.body)
    res.status(200).send('done')
})

module.exports = registration;