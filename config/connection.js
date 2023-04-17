require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.SQL_DB,
    process.env.SQL_USER,
    process.env.SQL_PASS,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3301
    }
);

module.exports = sequelize;