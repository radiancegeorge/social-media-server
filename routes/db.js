require('dotenv').config();
const mysql = require('mysql');
const db = mysql.createConnection({
    host : process.env.host,
    port : process.env.port,
    user: process.env.user,
    database: 'social_media',
    password: process.env.password
    
});
db.connect((err)=>{
    if(err) throw err;
    console.log('connected to db..')
})
module.exports = db;
