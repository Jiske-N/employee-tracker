const pool = require("./pool");

const promptOptionsQ = async function (input) {
  const result = await pool.query(input);
  return result;
};

const getValueQ = async function (input, secondaryInput) {
  const result = await pool.query(input, [secondaryInput]);
  return result;
};

const viewQ = async function (input) {
  const result = await pool.query(input);
  return result.rows;
};

const newDepartmentQ = async function (input, name) {
  await pool.query(input, [name]);
  return `Department ${name} added.`;
};

const newRoleQ = async function (input, roleTitle, roleSalary, department_Id) {
  await pool.query(input, [roleTitle, roleSalary, department_Id]);
  return `Role ${roleTitle} added.`;
};

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
