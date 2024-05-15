const { Pool } = require("pg");
require("dotenv").config();

// Connect to database
const pool = new Pool(
  {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: "localhost",
    database: process.env.DB_NAME,
  },
  console.log("Connected to the employee_tracker database!")
);

// currently unnesecary
// pool.connect();

module.exports = pool;
