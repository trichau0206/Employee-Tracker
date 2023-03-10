INSERT INTO department (name) VALUES
('Marketing'),
('Finance'),
('Operations Management'),
('Human Resource'),
('IT'),
('Customer Service');

INSERT INTO role (title, salary, department_id) VALUES
('CEO', 1000000, 3),
('Full Stack Developer', 200000, 1),
('Software Engineer', 300000, 2),
('Operations Manager', 500000, 5),
('Project Manager', 75000, 4),
('Intern', 50000, 6);
('Accountant', 10000, 2),
('Finanical Analyst', 150000, 2),

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Hanamichi', 'Sakuragi', 1, null),
('Kobe', 'Bryant', 2, 1),
('Jack', 'Paul', 3, 1),
('John', 'Wick', 4, 1),
('John', 'Cena', 2, 1),
('Kim', 'Kardashian', 5, 2),
('Connor', 'McGregor', 6, 3),
('Scotty', 'Pippen', 5, 3),