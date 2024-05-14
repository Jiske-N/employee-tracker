const pool = require("./pool");

const promptOptions = async function (input) {
  const result = await pool.query(input);
  return result;
};

const getValue = async function (input, secondaryInput) {
  const result = await pool.query(input, [secondaryInput]);
  return result;
};

const view = async function (input) {
  const result = await pool.query(input);
  return result.rows;
};

const newDepartment = async function (input, name) {
  await pool.query(input, [name]);
  return `Department ${name} added.`;
};

const newRoleQuery = async function (
  input,
  roleTitle,
  roleSalary,
  department_Id
) {
  await pool.query(input, [roleTitle, roleSalary, department_Id]);
  return `Role ${roleTitle} added.`;
};

const newEmployee = async function (
  input,
  firstName,
  lastName,
  roleIdE,
  managerIdE
) {
  await pool.query(input, [firstName, lastName, roleIdE, managerIdE]);
  return `Employee ${firstName} ${lastName} added.`;
};

const updateEmployeeQuery = async function (input, employeeId, roleIdU) {
  await pool.query(input, [employeeId, roleIdU]);
  return `Employee updated.`;
};

module.exports = {
  promptOptions,
  getValue,
  view,
  newDepartment,
  newRoleQuery,
  newEmployee,
  updateEmployeeQuery,
};
