//importing MySQL Module
const mysql = require('mysql');

//configurations for creating mysql connection
const connection = mysql.createConnection( {
    host: 'MacBook-Pro.lan',
    port: 3306,
    user: 'root',
    password: 'SpookyPooh'
});

//executing cnnection
connection.connect( function (err) {
    if(err) {
        return console.error('Error' + err.message);
    }
    console.log('Connected to MySQL server.')
});