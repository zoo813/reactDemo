const mysql = require('mysql');
 
const db = mysql.createPool({
    host : '192.168.0.104',
    port : 3306,
    user : 'itpms',
    password : '@itpmsadmin',
    database : 'itpms',
});

module.exports = db;