const mysql = require('mysql2/promise');
require('dotenv').config();
const inquirer = require('inquirer');


updateEmployee = async () => {

    const db = await mysql.createConnection({ host: 'localhost', user: process.env.DB_USER, password: process.env.DB_PASSWORD , database: process.env.DB_NAME });

    const role_results = await db.query('SELECT id, title FROM role');
    
    const list_roles = await role_results[0].map(({ id, title }) => ({ name: title, value: id }));

    const employees_list = await db.query('SELECT id, CONCAT(first_name, " ", last_name) AS employee_name FROM employee');

    const list_employees = await employees_list[0].map(({ id, employee_name }) => ({ name: employee_name, value: id }));

    const questions = [
        {
            type: 'list',
            message: 'Which employees role do you want to update?',
            name: 'employee_list',
            choices: list_employees,
        },
        {
            type: 'list',
            message: 'Which role do you want to assign the selected employee?',
            name: 'role_name',
            choices: list_roles,
        },
    ]

    const data = await inquirer.prompt(questions);

    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;

    console.log(data.list_employees, data.list_roles)

    const params = [data.role_name.toString(), data.employee_list.toString()];

    await db.query(sql, params);

    await console.log(`Updated employees role`);

}

module.exports = {
    updateEmployee,
}