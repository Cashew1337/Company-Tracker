// const mysql = require('mysql2');
const cTable = require('console.table')
const sequelize = require('../config/connection');

const db = sequelize;

viewDatabase = async () => {
    const sql = `SELECT * FROM departments`;

    const table = await db.query(sql)

    cTable.getTable(table);
}

module.exports = { viewDatabase }