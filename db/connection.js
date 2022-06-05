require("dotenv").config();

const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: process.env.DB_PW,
    database: "employee_tracker",
    port: "3306",
  },
  console.log("Connected to the employee tracker database.")
);

module.exports = db;
