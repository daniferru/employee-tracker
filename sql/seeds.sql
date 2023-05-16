INSERT INTO department (name)
VALUES
('Sales'),
('Finances'),
('Engineering'),
('Management'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Telemarketer', 45000, 5),
('Accountant', 65000, 4),
('IT Specialist', 75000, 3),
('Software Engineer', 80000, 3),
('Project Manager', 90000, 2),
('Lawyer', 100000, 1);

INSERT INTO employee (first_name, last_name, role_id, managerr_id)
VALUES
('Bart', 'Simp', 5, 2),
('Lisa', 'Sons', 4, 2),
('Homer', 'Burns', 3, 2),
('Bob', 'Grammer', 3, 2),
('Marge', 'Kavner', 2, NULL),
('Ned', 'Flanders', 1, NULL);