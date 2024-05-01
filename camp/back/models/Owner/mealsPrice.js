const sequelize = require('../../config/index.js');
const Datatype = require('sequelize');

const MealsPrice = sequelize.define("MealsPrice",{
    breakfast: {
        type: Datatype.FLOAT,
        allowNull: false
    },
    halfboard: {
        type: Datatype.FLOAT,
        allowNull: false
    },
    fullboard: {
        type: Datatype.FLOAT,
        allowNull: false
    }
});

module.exports = MealsPrice;