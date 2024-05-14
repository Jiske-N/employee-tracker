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
  retrieveManagerId,
} = require("./queryContents");
const {
  promptOptions,
  getValue,
  view,
  newDepartment,
  newRole,
  newEmployee,
} = require("./queryActions");
const { menu, addDepartment, addRole, addEmployee } = require("./prompts");

const getDepartmentId = async (department) => {
  // pool request to return ids and names
  // console.log("boi", retrieveDepartmentId, department);
  const id = await getValue(retrieveDepartmentId, department);
  // console.log("hello", id.rows[0].id);
  return id.rows[0].id;
};

const getRoleId = async (role) => {
  // pool request to return ids and names
  // console.log("boi", retrieveRoleId, role);
  const id = await getValue(retrieveRoleId, role);
  // console.log("hello", id.rows[0].id);
  return id.rows[0].id;
};

const getManagerId = async (manager) => {
  // pool request to return ids and names
  console.log(123, manager);
  let managerId;
  if (manager !== "None") {
    const id = await getValue(retrieveManagerId, manager);
    managerId = id.rows[0].id;
  }
  // console.log("boi", retrieveManagerId, manager);
  // const id = await getValue(retrieveManagerId, manager);
  // console.log("hello", id.rows[0].id);
  return managerId;
};

const menuController = async (selection) => {
  console.log("menuController", selection);
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
        console.log(contentsDepartment, name);
        //INSERT INTO department (name) VALUES ($1) name
        return newDepartment(contentsDepartment, name);
      case "Add a role":
        // const departmentsArray = [];
        // const departments = await promptOptions(viewDepartments);
        // for (const department of departments.rows) {
        //   // console.log(department.name);
        //   departmentsArray.push(department.name);
        // }
        // console.log(departments.rows);
        // console.log(departmentsArray);
        const { roleTitle, roleSalary, department } = await enquiry(addRole);
        console.log("yellow", department);
        const department_Id = await getDepartmentId(department);
        console.log(contentsRole, roleTitle, roleSalary, department_Id);
        return newRole(contentsRole, roleTitle, roleSalary, department_Id);
      case "Add an employee":
        const { firstName, lastName, roleId, manager } = await enquiry(
          addEmployee
        );
        // console.log("yellow", roleId, departmentId);
        const roleIdE = await getRoleId(roleId);
        // const departmentIdE = await getDepartmentId(departmentId);
        const managerIdE = await getManagerId(manager);
        // console.log(
        //   contentsEmployee,
        //   firstName,
        //   lastName,
        //   roleIdE,
        //   departmentIdE
        // );
        return newEmployee(
          contentsEmployee,
          firstName,
          lastName,
          roleIdE,
          // departmentIdE,
          managerIdE
        );
      case "Update an employee role":
        break;
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
