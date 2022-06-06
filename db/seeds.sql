INSERT INTO department (name)
VALUES
('Engineering'),
('Sales'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Software Engineer', 85000, 1),
('Lead Engineer', 150000, 1),
('Salesperson', 75000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 150000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Carlos', 'Gomez', 1, 2),
  ('John', 'Santo', 2, NULL),
  ('Bob', 'Mason', 3, NULL),
  ('George', 'Johnson', 4, NULL),
  ('Phil', 'Dunphy', 5, 4),
  ('Clark', 'Turner', 6, NULL),
  ('Mike', 'Singh', 7, 6);
