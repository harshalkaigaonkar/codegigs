const Sequelize = require('sequelize');
const db = new Sequelize('codegig', 'Harshal', 'harshal@12345', {
    dialect: 'mysql',
    host: 'localhost',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})

module.exports = db;