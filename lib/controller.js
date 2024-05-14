const {
  viewDepartments,
  viewRoles,
  viewEmployees,
} = require("./queryContents");

const menuController = async (selection) => {
  console.log("menuController", selection);
  try {
    switch (selection) {
      case "View all departments":
        return viewDepartments;
      case "View all roles":
        return viewRoles;
      case "View all employees":
        return viewEmployees;
      case "Add a department":
        break;
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
