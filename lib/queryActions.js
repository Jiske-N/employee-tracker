const pool = require("./pool");

// query to return a table
const promptOptionsQ = async function (input) {
  const result = await pool.query(input);
  return result;
};

// query to return a value/s from a table
const getValueQ = async function (input, secondaryInput) {
  const result = await pool.query(input, [secondaryInput]);
  return result;
};

// query to view a table
const viewQ = async function (input) {
  const result = await pool.query(input);
  return result.rows;
};

// query to add a department
const newDepartmentQ = async function (input, name) {
  await pool.query(input, [name]);
  return `Department ${name} added.`;
};

// query to add a role
const newRoleQ = async function (input, roleTitle, roleSalary, department_Id) {
  await pool.query(input, [roleTitle, roleSalary, department_Id]);
  return `Role ${roleTitle} added.`;
};

// query to add an employee
const newEmployeeQ = async function (
  input,
  firstName,
  lastName,
  roleIdE,
  managerIdE
) {
  await pool.query(input, [firstName, lastName, roleIdE, managerIdE]);
  return `Employee ${firstName} ${lastName} added.`;
};

// query to update an employee
const updateEmployeeQ = async function (input, employeeId, roleIdU) {
  await pool.query(input, [employeeId, roleIdU]);
  return `Employee updated.`;
};

module.exports = {
  promptOptionsQ,
  getValueQ,
  viewQ,
  newDepartmentQ,
  newRoleQ,
  newEmployeeQ,
  updateEmployeeQ,
};
