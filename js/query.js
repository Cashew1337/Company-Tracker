// const mysql = require('mysql2');
const cTable = require('console.table')
const mysql = require('mysql2/promise');
const sequelize = require('../config/connection')

viewDatabase = async () => {
    const sql = `SELECT * FROM departments`;

    await sequelize.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        } else {
            console.table(result);
        }
    })
}

module.exports = { viewDatabase }