const mysql = require('mysql');
const env = require('dotenv')
const db = mysql.createConnection({
    user,
    password,
    host,
    database
})