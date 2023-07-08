const inquirer = require('inquirer');
const sequelize = require('./config/connection');

const { allDepartments, allRoles, allEmployees } = require('./queries/queries.js');
const { addDepartment, addNewRole, addNewEmployee } = require('./queries/insertqueries.js');
const { updateEmployee } = require('./queries/updatequeries.js');

const questions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    },
];


const init = async () => {
    const data = await inquirer.prompt(questions)

    switch (data.choice) {
        case 'View all Departments':
            allDepartments();
            break;

        case 'View all roles':
            allRoles();
            break;

        case 'View all employees':
            allEmployees();
            break;

        case 'Add Department':
            addDepartment();
            break;

        case 'Add role':
            addNewRole();
            break;

        case 'Add employee':
            addNewEmployee();
            break;

        case 'Update employee':
            updateEmployee();
            break;

        case 'Quit':
            process.exit();

    }

}

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

init();