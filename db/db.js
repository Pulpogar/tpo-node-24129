const mysql = require('mysql2');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'sasa',
  database: 'moviesdb'
};

// Creo la conexión a la base de datos con promesas
const connection = mysql.createPool(dbConfig).promise();

module.exports = connection;
