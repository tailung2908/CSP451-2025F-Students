// Database connection module
// --------------------------
// This file connects to the MySQL database

const mysql = require('mysql');

// Create a connection object
const connection = mysql.createConnection({
  host: 'localhost',       // database host
  user: 'root',            // database username
  password: 'password',    // database password
  database: 'mydb'         // database name
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');
});

// Export the connection
module.exports = connection;

// Query helper functions
// ----------------------

// Get all users
function getUsers(callback) {
    connection.query('SELECT * FROM users', callback);
}

// Add a new user
function addUser(username, password, callback) {
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    connection.query(sql, [username, password], callback);
}

// Export query functions
module.exports = { connection, getUsers, addUser };
