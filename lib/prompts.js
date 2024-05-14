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
  getEmployees,
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
      "Quit",
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
  const departmentsArray = [];
  const departments = await promptOptions(viewDepartments);
  for (const department of departments.rows) {
    departmentsArray.push(department.name);
  }
  // console.log(departmentsArray);
  return departmentsArray;
};

const employeesArray = async () => {
  const employeesArray = [];
  const employees = await promptOptions(getEmployees);
  for (const employee of employees.rows) {
    // console.log(employee.name);
    employeesArray.push(employee.name);
  }
  // console.log(123, employeesArray);
  return employeesArray;
};

const rolesArray = async () => {
  const rolesArray = [];
  const roles = await promptOptions(viewRoles);
  for (const role of roles.rows) {
    // console.log(role.title);
    rolesArray.push(role.title);
  }
  // console.log(456, rolesArray);
  return rolesArray;
};

const managersArray = async () => {
  const managersArray = ["None"];
  const managers = await promptOptions(getEmployees);
  for (const manager of managers.rows) {
    // console.log(manager.name);
    managersArray.push(manager.name);
  }
  // console.log(managersArray);
  return managersArray;
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
    choices: rolesArray,
  },
  // {
  //   type: "list",
  //   name: "departmentId",
  //   message: "Select new employees department",
  //   choices: departmentsArray,
  // },
  {
    type: "list",
    name: "manager",
    message: "Select employees manager",
    choices: managersArray,
  },
];

const updateEmployee = [
  {
    type: "list",
    name: "employeeName",
    message: "Select an employee to reassign",
    choices: employeesArray,
  },
  {
    type: "list",
    name: "newRole",
    message: "Select a new role",
    choices: rolesArray,
  },
];

module.exports = { menu, addDepartment, addRole, addEmployee, updateEmployee };
