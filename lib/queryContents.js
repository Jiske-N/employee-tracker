const viewDepartments = "SELECT * FROM department";
const viewRoles =
  "SELECT R.id, R.title, D.name AS department, R.salary FROM role R JOIN department D ON R.department_id = D.id";
const viewEmployees =
  "SELECT E.id, E.first_name, E.last_name, R.title, D.name AS department, R.salary, E.manager_id AS manager FROM employee E JOIN role R ON E.role_id = R.id JOIN department D ON R.department_id = D.id";
const contentsDepartment = "INSERT INTO department (name) VALUES ($1)";

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  contentsDepartment,
};
