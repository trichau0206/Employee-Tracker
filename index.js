// Require dependencies

const { prompt } = require("inquirer");
const mysql = require('mysql2');
const util = require('util');
const gradient = require('gradient-string');
const figlet = require ('figlet');

// MySQL connection

const db = mysql.createConnection({
    host:"127.0.0.1",
    user:'root',
    password:'',
    database: "employee_db"
});

const query = util.promisify(db.query).bind(db);

db.query('query', (err, data) => {

});

// Welcome screen

setTimeout(menu, 1000);

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

function welcome() {
    const msg = "Employee \n Manager";
        figlet(msg, (err, data) => {
            console.log(gradient.pastel.multiline(data));
        });
         sleep();

}

welcome();

// Inquirer menu prompt

const menu = async () => {
    const response = await prompt({
        message: 'What would you like to do?',
        type: 'list',
        name: 'choice',
        choices: 
        [
            'View All Departments', 
            'View all Roles', 
            'View All Employees', 
            'Add a department', 
            'Add a New Employee', 
            'Add a Role', 
            'Update a Role', 
            'Update Managers', 
            'View Employees by Manager', 
            'View Employees by Department', 
            'Delete'
        ]
    }

    )

    switch (response.choice) {
        case 'Delete':
            const case4 = await prompt([{
                message: 'What would you like to delete?',
                type: 'list',
                name: 'del',
                choices: 
                [
                'Department', 
                'Role', 
                'Employee'
                ]
            },
            {
                message: 'Enter the Id you wish to delete',
                type: 'input',
                name: 'delId',
                choices: Number
            }
            ])
            switch (case4.del) {
                case 'Department':

                    const delete1 = await query('DELETE FROM department WHERE id =?', case4.delId) // Delete department from department table
                    console.table(delete1)
                    break;

                case 'Role':

                    const delete2 = await query('DELETE FROM role WHERE id =?', case4.delId)   // Delete role from role table
                    console.table(delete2)
                    break;

                case 'Employee':

                    const delete3 = await query('DELETE FROM employee WHERE id =?', case4.delId) // Delete employee from employee table
                    console.table(delete3)
                    break;
                    

            }
            menu();
            break;

        case 'Update a Role':
            const case2 = await prompt([{
                message: 'Please enter the employee id you wish to update',
                type: 'type',
                name: 'employ',
                input: Number
            },
            {
                message: 'Please enter the new role id ', 
                type: 'type',
                name: 'newrole',
                input: Number
            }
            ])

            const update1 = await query('UPDATE employee  SET role_id=? WHERE ?=employee.id', [case2.newrole, case2.employ]) // Change role for existing employees
            console.log(update1)
            menu();
            break;
        case 'Add a Role': // Add a new role to role table

            const roleNew = await prompt([{
                message: 'Please enter the new role',  
                type: 'type',
                name: 'role',
                input: String
            },
            {
                message: 'Please enter the Salary for the role',
                type: 'type',
                name: 'sal',
                input: Number
            },
            {
                message: 'Please enter the department id for the role',
                type: 'type',
                name: 'id',
                input: Number
            }
            ])
            const insert1 = await query('INSERT INTO role (title, salary, department_id) VALUES (?,?,?)', [roleNew.role, roleNew.sal, roleNew.id])
            console.log(insert1)
            menu();
            break;
            case 'Add a New Employee': //Add a new employee to employee table

            const case3 = await prompt([{
                message: 'Please enter Employee First Name',
                type: 'type',
                name: 'first',
                input: String
            },
            {
                message: 'Please enter employee last name',
                type: 'type',
                name: 'last',
                input: String
            },
            {
                message: 'Please enter the role id',
                type: 'type',
                name: 'rol',
                input: Number
            },
            {
                message: 'Please enter manager id',
                type: 'type',
                name: 'man',
                input: Number
            }
            ])

            const insert2 = await query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', [case3.first, case3.last, case3.rol, case3.man])
            console.log(insert2)
            menu();
            
            break;
            case 'Add a department': // Add a new department to department table


            const ask = await prompt({
                message: 'Please enter the new department',
                type: 'type',
                name: 'choice',
                input: String
            })
            const inset = await query('INSERT INTO department (name) VALUES (?)', ask.choice)
            console.table(inset)
            menu();
            break;
            case 'View All Departments':
            const departments = await query('SELECT * FROM department')
            console.table(departments);
            const home = await prompt({
                message: 'Return home',
                type: 'list',
                name: 'choice',
                choices: ['Home',]

            })
            if (home.choice == 'Home') {
                menu();

            }
            break;

            case 'View all Roles':
            const role = await query('SELECT * FROM role')
            console.table(role)
            const back = await prompt({
                message: 'Return home',
                type: 'list',
                name: 'choice',
                choices: ['Home',]

            })
            if (back.choice == 'Home') {
                menu();

            }
            break;



            case 'View Employees by Manager':
            const answer = await prompt({

                message: 'Choose your manager',
                type: 'list',
                name: 'manager_choice',
                choices: ['CEO', 'CMO', 'CFO', 'CTO'],
            })
            switch (answer.manager_choice) {
                case 'CEO':
                    const manager1 = await query('SELECT * FROM employee WHERE employee.manager_id = 1');
                    console.table(manager1);
                    break;

                case 'CMO':
                    const manager2 = await query('SELECT * FROM employee WHERE employee.manager_id = 2');
                    console.table(manager2);
                    break;
                case 'CFO':
                    const manager3 = await query('SELECT * FROM employee WHERE employee.manager_id = 3');
                    console.table(manager3);
                    break;
                case 'CTO':
                    const manager4 = await query('SELECT * FROM employee WHERE employee.manager_id = 4');
                    console.table(manager4);
                    break;
            }
            menu();
            break;



        case 'View All Employees':
            const selection = await query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;")
            console.table(selection);
            const back2 = await prompt({
                message: 'Return home',
                type: 'list',
                name: 'choice',
                choices: ['Home',]

            })
            if (back2.choice == 'Home') {
                menu();

            }
            break;


        case 'View Employees by Department':
            const empDepartment = await prompt({

                message: 'Choose A Department',
                type: 'list',
                name: 'department_choice',
                choices: 
                    [
                    'Marketing',
                    'Finance',
                    'Operations Management',
                    'Human Resource',
                    'IT',
                    'Customer Service'
                    ],
            })

            switch (empDepartment.department_choice) {
                case 'Marketing':
                    const marketing = await query('SELECT * FROM employee WHERE employee.role_id = 1');
                    console.table(marketing);
                    break;

                case 'Finance':
                    const finance = await query('SELECT * FROM employee WHERE employee.role_id = 2');
                    console.table(finance);
                    break;
                case 'Operations Management':
                    const operations_management = await query('SELECT * FROM employee WHERE employee.role_id = 3');
                    console.table(operations_management);
                    break;
                case 'Human Resource':
                    const human_resource = await query('SELECT * FROM employee WHERE employee.role_id = 4');
                    console.table(human_resource);
                    break;
                case 'IT':
                    const it = await query('SELECT * FROM employee WHERE employee.role_id = 5');
                    console.table(it);
                    break;
                case 'Customer Service':
                    const customer_service = await query('SELECT * FROM employee WHERE employee.role_id = 6');
                    console.table(customer_service);
                    break;
            }
            menu();
            break;

        case 'Update Managers':
            const employee_list = await query('SELECT * FROM employee')
            console.table(employee_list);
            const update = await prompt(
                [{
                    message: 'Enter the Employee id that you wish to update',
                    type: 'type',
                    name: 'emp',
                    input: Number
                },
                {
                    message: 'Enter the Employees new Manager ID',
                    type: 'list',
                    name: 'managerid',
                    choices: [1, 2, 3, 4]
                }]
            )
            const updateTable = await query('UPDATE employee SET employee.manager_id= ? WHERE id= ?', [update.managerid, update.emp]);
            console.table(updateTable);
            menu();
            break;
    }
}