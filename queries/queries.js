const mysql = require('mysql2/promise');
require('dotenv').config();

allDepartments = async () => {

    const db = await mysql.createConnection({ host: 'localhost', user: process.env.DB_USER, password: process.env.DB_PASSWORD , database: process.env.DB_NAME });

    const results = await db.query('SELECT id, dpt_name AS Department FROM department');
    console.log(results);
    return console.table([...results[0]]);

}

allRoles = async () => {

    const db = await mysql.createConnection({ host: 'localhost', user: process.env.DB_USER, password: process.env.DB_PASSWORD , database: process.env.DB_NAME });

    const results = await db.query('SELECT role.id, title, dpt_name AS department, salary FROM department INNER JOIN role ON department.id = role.department_id');

    return console.table([...results[0]]);
}

allEmployees = async () => {

    const db = await mysql.createConnection({ host: 'localhost', user: process.env.DB_USER, password: process.env.DB_PASSWORD , database: process.env.DB_NAME });

    const results = await db.query('SELECT T1.id, T1.first_name, T1.last_name, role.title, department.dpt_name AS department, role.salary, CONCAT(T2.first_name, " ", T2.last_name) AS Manager FROM department INNER JOIN role ON role.department_id = department.id INNER JOIN employee T1 ON  role.id = T1.role_id LEFT JOIN employee T2 ON T1.manager_id = T2.id ORDER BY T1.id ASC');

    return console.table([...results[0]]);
}


module.exports = {
    allDepartments,
    allRoles,
    allEmployees,
};