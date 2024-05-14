const pool = require("./pool");

// const stupid = "SELECT * FROM role";

const viewQuery = async function (input) {
  const result = await pool.query(input);
  console.table(result.rows);
};

module.exports = viewQuery;
