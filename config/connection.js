// Set up MySQL connection.
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "pass",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) throw err
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;