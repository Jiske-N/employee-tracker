const viewDepartmentsC = "SELECT * FROM department";
const viewRolesC =
  "SELECT R.id, R.title, D.name AS department, R.salary FROM role R JOIN department D ON R.department_id = D.id";
const viewEmployeesC =
  "SELECT E.id, E.first_name, E.last_name, R.title, D.name AS department, R.salary, E.manager_id AS manager FROM employee E JOIN role R ON E.role_id = R.id JOIN department D ON R.department_id = D.id";
const viewDepartmentEmployeesC =
  "SELECT E.id, E.first_name, E.last_name, R.title, D.name AS department FROM employee E JOIN role R ON E.role_id = R.id JOIN department D ON R.department_id = D.id WHERE d.id = $1";
const viewManagersEmployeesC =
  "SELECT E.id, E.first_name, E.last_name, R.title, D.name AS department, R.salary, E.manager_id AS manager FROM employee E JOIN role R ON E.role_id = R.id JOIN department D ON R.department_id = D.id WHERE e.manager_id = $1";
const viewNoManagerEmployeesC =
  "SELECT E.id, E.first_name, E.last_name, R.title, D.name AS department, R.salary, E.manager_id AS manager FROM employee E JOIN role R ON E.role_id = R.id JOIN department D ON R.department_id = D.id WHERE E.manager_id IS NULL";
const departmentC = "INSERT INTO department (name) VALUES ($1)";
const roleC =
  "INSERT INTO role (title, salary, department_id) VALUES (($1), ($2), ($3))";
const retrieveDepartmentIdC = "SELECT D.id FROM department D WHERE D.name = $1";
const retrieveRoleIdC = "SELECT R.id FROM role R WHERE R.title = $1";
const employeeC =
  "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)";
const getEmployeesC =
  "SELECT E.first_name || ' ' || E.last_name AS name FROM employee E";
const retrieveEmployeeIdC =
  "SELECT E.id FROM employee E WHERE E.first_name || ' ' || E.last_name = $1";
const updateEmployeeRoleC = "UPDATE employee SET role_id = $1 WHERE id = $2";
const updateEmployeeManagerC =
  "UPDATE employee SET manager_id = $1 WHERE id = $2";

module.exports = {
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
  getEmployeesC,
  retrieveEmployeeIdC,
  updateEmployeeRoleC,
  updateEmployeeManagerC,
};
