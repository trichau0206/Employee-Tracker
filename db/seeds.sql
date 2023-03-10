INSERT INTO department (name) VALUES
('Marketing'),
('Finance'),
('Operations Management'),
('Human Resource'),
('IT'),
('Customer Service');

INSERT INTO role (title, salary, department_id) VALUES
('CEO', 1000000, 3),
('CMO', 200000, 1),
('CFO', 300000, 2),
('CTO', 500000, 5),
('Associate', 75000, 4),
('Intern', 50000, 6);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Hanamichi', 'Sakuragi', 1, null),
('Kobe', 'Bryant', 2, 2),
('Jack', 'Paul', 3, 1),
('John', 'Wick', 4, 3),
('John', 'Cena', 2, 1),
('Kim', 'Kardashian', 5, 2),
('Connor', 'McGregor', 6, 3),
('Scotty', 'Pippen', 5, 3),
('Dennis', 'Rodman', 5, 2),
('Bobby', 'Lesley', 6, 4),
('Tony', 'Stack', 5, 5),
('Chris', 'Evans', 6, 6);