const inquirer = require('inquirer');

const questions = [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'prompt',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
        }
    ];

const init = async () => {
    await inquirer.prompt(questions)
    await (answers)
}