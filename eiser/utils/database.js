const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'dbdemo',
  password: '0000'
});

module.exports = pool.promise();
