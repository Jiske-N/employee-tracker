const enquiry = require("./inquirer");
const {
  viewDepartments,
  viewRoles,
  viewEmployees,
  contentsDepartment,
  contentsRole,
  retrieveDepartmentId,
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

const getId = async (department) => {
  // pool request to return ids and names
  console.log("boi", retrieveDepartmentId, department);
  const id = await getValue(retrieveDepartmentId, department);
  console.log("hello", id.rows[0].id);
  return id.rows[0].id;
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
        const departmentId = await getId(department);
        console.log(contentsRole, roleTitle, roleSalary, departmentId);
        return newRole(contentsRole, roleTitle, roleSalary, departmentId);
      case "Add an employee":
        break;
      case "Update an employee role":
        break;

      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = menuController;
