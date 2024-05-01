const sequelize = require('../../config/index.js');
const Datatype = require('sequelize');
const CampingOwner = require('./campingOwner.js');

const CampingSite = sequelize.define('CampingSite',{
    campingSiteId: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Datatype.STRING,
        allowNull: false
    },
    capacity: {
        type: Datatype.INTEGER,
        allowNull: false
    },
    description: {
        type: Datatype.STRING,
        allowNull: false
    },
    price: {
        type: Datatype.INTEGER,
        allowNull: false
    },
    image: {
        type: Datatype.STRING,
        allowNull: false
    }
});



module.exports = CampingSite;