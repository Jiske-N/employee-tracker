-- Insert into the department table
INSERT INTO department (name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

-- Insert into the role table
INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 150000, 2),
       ('Software Engineer', 120000, 2),
       ('Account Mangager', 160000, 3),
       ('Accountant', 125000, 3),
       ('Legal Team Lead', 250000, 4),
       ('Lawyer', 190000, 4);

-- insert into the employee table
       INSERT INTO employee (first_name, last_name, role_id, manager_id)
       VALUES ('John', 'Doe', 1, NULL),
       ('Mike', 'Chan', 2, 1),
       ('Ashley', 'Rodriguez', 3, NULL),
       ('Kevin', 'Tupik', 4, 3),
       ('Kunal', 'Singh', 5, NULL),
       ('Malia', 'Brown', 6, 5),
       ('Sarah', 'Lourd', 7, NULL),
       ('Tom', 'Allen', 8, 7);

-- insert into emplyee table without manager_id
-- INSERT INTO employee (first_name, last_name, role_id)
-- VALUES  ('John', 'Doe', 1),
-- 		('Mike', 'Chan', 2),
-- 		('Ashley', 'Rodriguez', 3),
-- 		('Kevin', 'Tupik', 4),
-- 		('Kunal', 'Singh', 5),
-- 		('Malia', 'Brown', 6),
-- 		('Sarah', 'Lourd', 7),
-- 		('Tom', 'Allen', 8);

-- -- Update book_prices so when price = 2 it becomes 3--
-- UPDATE book_prices
-- SET price = 3
-- WHERE price = 2;

-- -- delete from favourite_books when book_name = 'Things Fall Apart'
-- DELETE FROM favorite_books
-- WHERE book_name = 'Things Fall Apart';

