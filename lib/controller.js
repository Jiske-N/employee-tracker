const enquiry = require("./inquirer");
const {
  viewDepartments,
  viewRoles,
  viewEmployees,
  contentsDepartment,
  contentsRole,
  retrieveDepartmentId,
  retrieveRoleId,
  contentsEmployee,
  retrieveEmployeeId,
  updateEmployeeRole,
} = require("./queryContents");
const {
  promptOptions,
  getValue,
  view,
  newDepartment,
  newRoleQuery,
  newEmployee,
  updateEmployeeQuery,
} = require("./queryActions");
const {
  menu,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployee,
} = require("./prompts");

const getDepartmentId = async (department) => {
  // pool request to return ids and names
  // console.log("boi", retrieveDepartmentId, department);
  const id = await getValue(retrieveDepartmentId, department);
  // console.log("hello", id.rows[0].id);
  return id.rows[0].id;
};

const getEmployeeId = async (employee) => {
  // pool request to return ids and names
  // console.log("boi", retrieveRoleId, role);
  const id = await getValue(retrieveEmployeeId, employee);
  // console.log("hello", id.rows[0].id);
  return id.rows[0].id;
};

const getRoleId = async (role) => {
  // pool request to return ids and names
  // console.log("gurl", retrieveRoleId, role);
  const id = await getValue(retrieveRoleId, role);
  // console.log("hello", id.rows[0].id);
  return id.rows[0].id;
};

const getManagerId = async (manager) => {
  // pool request to return ids and names
  // console.log(123, manager);
  let managerId;
  if (manager !== "None") {
    const id = await getValue(retrieveEmployeeId, manager);
    managerId = id.rows[0].id;
  }
  // console.log("boi", retrieveManagerId, manager);
  // const id = await getValue(retrieveManagerId, manager);
  // console.log("hello", id.rows[0].id);
  return managerId;
};

const menuController = async (selection) => {
  try {
    switch (selection) {
      case "View all departments":
        return view(viewDepartments);

      case "View all roles":
        return view(viewRoles);

      case "View all employees":
        return view(viewEmployees);

      case "Add a department":
        const { name } = await enquiry(addDepartment);

        return newDepartment(contentsDepartment, name);

      case "Add a role":
        const { roleTitle, roleSalary, department } = await enquiry(addRole);

        const department_Id = await getDepartmentId(department);
        // console.log(contentsRole, roleTitle, roleSalary, department_Id);
        return newRoleQuery(contentsRole, roleTitle, roleSalary, department_Id);

      case "Add an employee":
        const { firstName, lastName, roleId, manager } = await enquiry(
          addEmployee
        );

        const roleIdE = await getRoleId(roleId);
        const managerIdE = await getManagerId(manager);

        return newEmployee(
          contentsEmployee,
          firstName,
          lastName,
          roleIdE,
          managerIdE
        );

      case "Update an employee role":
        const { employeeName, newRole } = await enquiry(updateEmployee);
        const employeeId = await getEmployeeId(employeeName);
        const roleIdU = await getRoleId(newRole);
        return updateEmployeeQuery(updateEmployeeRole, employeeId, roleIdU);
      case "Quit":
        return "Quit";

      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = menuController;
