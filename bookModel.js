const Sequelize = require('sequelize');
const db = require('./dbConnection');

module.exports = db.sequelize.define(
    'books', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: { type: Sequelize.STRING },
        author: { type: Sequelize.STRING },
        genre: { type: Sequelize.STRING }
    }, {
        timestamps: false
    }
)