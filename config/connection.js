const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'EzraVK2023!adk',
    database: 'employee_db'
});

module.exports = connection;