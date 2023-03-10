# 12 SQL: Employee - Tracker

## Task

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. Our client need us to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```
## Insert Database

```
SOURCE db/schema.sql;
SOURCE db/seed.sql;
USE employee_db;
```
## Installation
Client need to install node independencies before running the application by using command:
```
npm i
```
After that client can invoked by using command:
```
node index
```
![](./Assets/screenshot.png)
## Result
When using the apllication client will be able to view all information from database like department, role, and employee. Beside that, client also can add, delete, and update information inside database through the terminal.

## Walkthrough Video
(https://drive.google.com/file/d/1QtdDEFn-kz7PKh_sPUKKbYwGG8d60o34/view?usp=share_link)
