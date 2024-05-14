const enquiry = require("./inquirer");
const {
  viewDepartments,
  viewRoles,
  viewEmployees,
  contentsDepartment,
} = require("./queryContents");
const { view, newDepartment, newRole, newEmployee } = require("./queryActions");
const { addDepartment } = require("./prompts");

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
        return newDepartment(contentsDepartment, name);
      case "Add a role":
        break;
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
