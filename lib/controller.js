const enquiry = require("./inquirer");
const {
  viewDepartmentsC,
  viewRolesC,
  viewEmployeesC,
  viewDepartmentEmployeesC,
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
} = require("./prompts");

// returns department id's
const getDepartmentId = async (department) => {
  // pool request to return ids and names
  // console.log("boi", retrieveDepartmentId, department);
  const id = await getValueQ(retrieveDepartmentIdC, department);
  // console.log("hello", id.rows[0].id);
  return id.rows[0].id;
};

// returns employee id's
const getEmployeeId = async (employee) => {
  // pool request to return ids and names
  // console.log("boi", retrieveRoleId, role);
  const id = await getValueQ(retrieveEmployeeIdC, employee);
  // console.log("hello", id.rows[0].id);
  return id.rows[0].id;
};

// returns role id's
const getRoleId = async (role) => {
  // pool request to return ids and names
  // console.log("gurl", retrieveRoleId, role);
  const id = await getValueQ(retrieveRoleIdC, role);
  // console.log("hello", id.rows[0].id);
  return id.rows[0].id;
};

// returns manager id's
const getManagerId = async (manager) => {
  // pool request to return ids and names
  // console.log(123, manager);
  let managerId;
  if (manager !== "None") {
    const id = await getValueQ(retrieveEmployeeIdC, manager);
    managerId = id.rows[0].id;
  }
  // console.log("boi", retrieveManagerId, manager);
  // const id = await getValueQ(retrieveManagerId, manager);
  // console.log("hello", id.rows[0].id);
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

      // _______________________________________________________
      case "View employees by manager":
        // const manager = await enquiry();
        return viewQ();
      // _______________________________________________________
      case "View employees by department":
        const { selectDepartment } = await enquiry(selectDepartmentP);
        console.log(1, selectDepartment);
        const viewDepartmentId = await getDepartmentId(selectDepartment);
        console.log(2, viewDepartmentId);
        return view2Q(viewDepartmentEmployeesC, viewDepartmentId);

      case "Add a department":
        const { name } = await enquiry(addDepartmentP);
        return newDepartmentQ(departmentC, name);

      case "Add a role":
        const { roleTitle, roleSalary, department } = await enquiry(addRoleP);
        const department_Id = await getDepartmentId(department);
        return newRoleQ(roleC, roleTitle, roleSalary, department_Id);

      case "Add an employee":
        const { firstName, lastName, roleId, manager } = await enquiry(
          addEmployeeP
        );

        const roleIdE = await getRoleId(roleId);
        const managerIdE = await getManagerId(manager);

        return newEmployeeQ(
          employeeC,
          firstName,
          lastName,
          roleIdE,
          managerIdE
        );

      case "Update an employee role":
        const { employeeName, newRole } = await enquiry(updateEmployeeP);
        const employeeId = await getEmployeeId(employeeName);
        const roleIdU = await getRoleId(newRole);
        return updateEmployeeQ(updateEmployeeRoleC, roleIdU, employeeId);

      // _______________________________________________________
      case "Update an employee manager":
        const { employeeNameM, newManagerM } = await enquiry(updateManagerP);
        const employeeIdM = await getEmployeeId(employeeNameM);
        const managerIdM = await getEmployeeId(newManagerM);
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
