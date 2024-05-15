const enquiry = require("./inquirer");
const {
  viewDepartmentsC,
  viewRolesC,
  viewEmployeesC,
  viewDepartmentEmployeesC,
  viewManagersEmployeesC,
  viewNoManagerEmployeesC,
  departmentC,
  roleC,
  retrieveDepartmentIdC,
  retrieveRoleIdC,
  employeeC,
  retrieveEmployeeIdC,
  updateEmployeeRoleC,
  updateEmployeeManagerC,
} = require("./queryContents");

const {
  getValueQ,
  viewQ,
  view2Q,
  newDepartmentQ,
  newRoleQ,
  newEmployeeQ,
  updateEmployeeQ,
} = require("./queryActions");

const {
  addDepartmentP,
  addRoleP,
  addEmployeeP,
  updateEmployeeP,
  updateManagerP,
  selectDepartmentP,
  selectManagerP,
} = require("./prompts");

// returns department id's
const getDepartmentId = async (department) => {
  const id = await getValueQ(retrieveDepartmentIdC, department);
  return id.rows[0].id;
};

// returns employee id's
const getEmployeeId = async (employee) => {
  const id = await getValueQ(retrieveEmployeeIdC, employee);
  return id.rows[0].id;
};

// returns role id's
const getRoleId = async (role) => {
  const id = await getValueQ(retrieveRoleIdC, role);
  return id.rows[0].id;
};

// returns manager id's
const getManagerId = async (manager) => {
  let managerId;
  if (manager !== "None") {
    const id = await getValueQ(retrieveEmployeeIdC, manager);
    managerId = id.rows[0].id;
  }
  return managerId;
};

// handle inputs from main menu
const menuController = async (selection) => {
  try {
    switch (selection) {
      case "View all departments":
        return viewQ(viewDepartmentsC);

      case "View all roles":
        return viewQ(viewRolesC);

      case "View all employees":
        return viewQ(viewEmployeesC);

      case "View employees by manager":
        // prompt to select employee as manager
        const { selectManager } = await enquiry(selectManagerP);

        // value to be returned and logged at the end
        let logValue;

        // check to see if an employee or none was selected
        if (selectManager !== "None") {
          // retrieve id of selected employee
          const viewManagerId = await getEmployeeId(selectManager);

          // set log value to an object containing employees under the manager
          logValue = await view2Q(viewManagersEmployeesC, viewManagerId);

          // if the log value is empty then replace with a message
          if (Array.isArray(logValue) && logValue.length === 0) {
            logValue = "This employee is not a manager";
          }

          // if none was selected set return all employees without a manager
        } else {
          logValue = await viewQ(viewNoManagerEmployeesC);
        }
        return logValue;

      case "View employees by department":
        // select department from a list
        const { selectDepartment } = await enquiry(selectDepartmentP);

        // get selections id
        const viewDepartmentId = await getDepartmentId(selectDepartment);

        // return object with employees in department
        return view2Q(viewDepartmentEmployeesC, viewDepartmentId);

      case "Add a department":
        // query details of new department
        const { name } = await enquiry(addDepartmentP);

        // add new department to database and return confirmation
        return newDepartmentQ(departmentC, name);

      case "Add a role":
        // query details on new role
        const { roleTitle, roleSalary, department } = await enquiry(addRoleP);

        // return id of department
        const department_Id = await getDepartmentId(department);

        // add new role to database and return confirmation
        return newRoleQ(roleC, roleTitle, roleSalary, department_Id);

      case "Add an employee":
        // query details of new employee
        const { firstName, lastName, role, manager } = await enquiry(
          addEmployeeP
        );

        // get ids of role and manager
        const roleIdE = await getRoleId(role);

        const managerIdE = await getManagerId(manager);

        // add new employee to database and return confirmation
        return newEmployeeQ(
          employeeC,
          firstName,
          lastName,
          roleIdE,
          managerIdE
        );

      case "Update an employee role":
        // select an employee and new role
        const { employeeName, newRole } = await enquiry(updateEmployeeP);

        // get ids of employee and new role
        const employeeId = await getEmployeeId(employeeName);
        const roleIdU = await getRoleId(newRole);

        // update database with new role and return confirmation
        return updateEmployeeQ(updateEmployeeRoleC, roleIdU, employeeId);

      case "Update an employee manager":
        // query employee name and name of new manager
        const { employeeNameM, newManagerM } = await enquiry(updateManagerP);

        // get ids of employee and manager
        const employeeIdM = await getEmployeeId(employeeNameM);
        const managerIdM = await getEmployeeId(newManagerM);

        // update employees new manager in database and return confirmation
        return updateEmployeeQ(updateEmployeeManagerC, managerIdM, employeeIdM);

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
