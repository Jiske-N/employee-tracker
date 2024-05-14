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

const newRole = async function (input, roleTitle, roleSalary, departmentId) {
  await pool.query(input, [roleTitle, roleSalary, departmentId]);
  return `Role ${roleTitle} added.`;
};

const newEmployee = async function (
  input,
  firstName,
  lastName,
  roleIdE,
  // departmentIdE,
  managerIdE
) {
  await pool.query(input, [
    firstName,
    lastName,
    roleIdE,
    // departmentIdE,
    managerIdE,
  ]);
  return `Employee ${firstName} ${lastName} added.`;
};

module.exports = {
  promptOptions,
  getValue,
  view,
  newDepartment,
  newRole,
  newEmployee,
};
