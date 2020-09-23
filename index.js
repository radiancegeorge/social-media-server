const express = require('express');
const app = express();
const port = 4000;
const registration = require('./routes/registration');

app.use('/register', registration);





app.listen(port, (err)=>{
    if(err)throw err;
    console.log(`server is running on port ::: ${port}`)
})