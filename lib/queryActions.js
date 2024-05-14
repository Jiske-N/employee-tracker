const pool = require("./pool");

const view = async function (input) {
  const result = await pool.query(input);
  return result.rows;
};

const newDepartment = async function (input, name) {
  await pool.query(input, [name]);
  return `Department ${name} added.`;
};

const newRole = async function (input, name) {
  await pool.query(input, [name]);
  return `Department ${name} added.`;
};

const newEmployee = async function (input, name) {
  await pool.query(input, [name]);
  return `Department ${name} added.`;
};

module.exports = { view, newDepartment, newRole, newEmployee };
