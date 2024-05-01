const sequelize = require('../../config/index.js');
const Datatype = require('sequelize');

const Extra = sequelize.define("Extra",{
    id: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Datatype.STRING,
        allowNull: false
    },
    price: {
        type: Datatype.INTEGER,
        allowNull: false
    },
    description: {
        type: Datatype.STRING,
        allowNull: false
    }
});

module.exports = Extra;