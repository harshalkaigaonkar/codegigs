const Sequelize = require('sequelize');
const db = require('../db/db');

const Gig = db.define('gig', {
    title: {
        type: Sequelize.STRING,
    },
    tech: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    budget: {
        type: Sequelize.STRING,
    },
    contact_email: {
        type: Sequelize.STRING,
    }
})

module.exports = Gig;