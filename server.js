const inquirer = require('inquirer');
const { viewDatabase } = require('./js/query');

const questions = [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'prompt',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
        },
        {
            type: 'input',
            message: 'Enter new department name',
            name: 'department_name',
            when: (answer) => answer.choice === 'add a department'
        },
        {
            type: 'input',
            message: 'Enter new role name',
            name: 'title',
            when: (answer) => answer.choice === 'add a role'
        },
        {
            type: 'input',
            message: 'Enter role salary',
            name: 'salary',
            when: (answer) => answer.choice === 'add a role'
        },
        {
            type: 'input',
            message: 'Enter department id for new role',
            name: 'department_id',
            when: (answer) => answer.choice === 'add a role'
        },
        {
            type: 'input',
            message: 'Enter first name',
            name: 'first_name',
            when: (answer) => answer.choice === 'add an employee'
        },
        {
            type: 'input',
            message: 'Enter last name',
            name: 'last_name',
            when: (answer) => answer.choice === 'add an employee'
        },
        {
            type: 'input',
            message: 'Enter employee role',
            name: 'title',
            when: (answer) => answer.choice === 'add an employee'
        },
        {
            type: 'input',
            message: 'Enter employee manager',
            name: 'manager',
            when: (answer) => answer.choice === 'add an employee'
        }
    ];

const init = async () => {
    const data = await inquirer.prompt(questions)
    
    if (data.choice === 'view all departments') {
        viewDatabase();
    }
}

init();