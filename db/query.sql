-- view all departments
SELECT * FROM department;

-- view all roles
SELECT R.id, R.title, D.name AS department, R.salary 
FROM role R
JOIN department D ON R.department_id = D.id;

-- view all employees
SELECT E.id, E.first_name, E.last_name, R.title, D.name AS department, R.salary, E.manager_id AS manager
FROM employee E
JOIN role R ON E.role_id = R.id
JOIN department D ON R.department_id = D.id;

-- add department
INSERT INTO department (name)
VALUES ('Legal');

-- add a role
INSERT INTO role (title, salary, department_id)
VALUES ('Lawyer', 190000, 4);

-- add an employee
       INSERT INTO employee (first_name, last_name, role_id, manager_id)
       VALUES ('John', 'Doe', 1, NULL);

-- update an employee - select an employee to update and their new role and this information is updated in the database
UPDATE employee
SET  = 3
WHERE price = 2;