const viewDepartments = "SELECT * FROM department";
const viewRoles =
  "SELECT R.id, R.title, D.name AS department, R.salary FROM role R JOIN department D ON R.department_id = D.id";
const viewEmployees =
  "SELECT E.id, E.first_name, E.last_name, R.title, D.name AS department, R.salary, E.manager_id AS manager FROM employee E JOIN role R ON E.role_id = R.id JOIN department D ON R.department_id = D.id";
const contentsDepartment = "INSERT INTO department (name) VALUES ($1)";
const contentsRole =
  "INSERT INTO role (title, salary, department_id) VALUES (($1), ($2), ($3))";
const retrieveDepartmentId =
  "SELECT department.id FROM department WHERE department.name = $1";
const retrieveRoleId = "SELECT role.id FROM role WHERE role.title = $1";
const contentsEmployee =
  "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)";
const getEmployees =
  "SELECT employee.first_name || ' ' || employee.last_name AS name FROM employee";
const retrieveManagerId =
  "SELECT employee.id FROM employee WHERE employee.first_name || ' ' || employee.last_name = $1";

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  contentsDepartment,
  contentsRole,
  retrieveDepartmentId,
  retrieveRoleId,
  contentsEmployee,
  getEmployees,
  retrieveManagerId,
};
