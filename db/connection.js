const util = require("util");
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

connection.connect(
  function (err){
    if(err) {
      console.log(err)
    }else{
      console.log("Successfully connected to:"+ process.env.DB_NAME)
    }
  }
);

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;