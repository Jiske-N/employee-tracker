const {
  promptOptions,
  view,
  newDepartment,
  newRole,
  newEmployee,
} = require("./queryActions");

const {
  viewDepartments,
  viewRoles,
  viewEmployees,
  contentsDepartment,
  contentsRole,
} = require("./queryContents");

// prompt for menu
const menu = [
  {
    type: "list",
    name: "menu",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
  },
];

// prompt for adding a department.
const addDepartment = [
  {
    type: "input",
    name: "name",
    message: "Enter name of new department",
  },
];

const departmentsArray = async () => {
  // pool request to return ids and names
  const departmentsArray = [];
  const departments = await promptOptions(viewDepartments);
  for (const department of departments.rows) {
    // console.log(department.name);
    departmentsArray.push(department.name);
  }
  console.log(departmentsArray);
  return departmentsArray;
};

// prompt for adding a new role
const addRole = [
  {
    type: "input",
    name: "roleTitle",
    message: "Enter title of new role",
  },
  {
    type: "input",
    name: "roleSalary",
    message: "Enter salary of new role",
  },
  {
    type: "list",
    name: "department",
    message: "Select department for new role",
    choices: departmentsArray,
  },
];

const addEmployee = [
  {
    type: "input",
    name: "firstName",
    message: "Enter new employees first name",
  },
  {
    type: "input",
    name: "lastName",
    message: "Enter new employees last name",
  },
  {
    type: "list",
    name: "roleId",
    message: "Select new employees role",
    choices: [1, 2, 3, 4],
  },
  {
    type: "list",
    name: "departmentId",
    message: "Select new employees department",
    choices: [1, 2, 3, 4],
  },
];

module.exports = { menu, addDepartment, addRole, addEmployee };
