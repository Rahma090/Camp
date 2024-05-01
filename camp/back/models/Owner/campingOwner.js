const sequelize = require('../../config/index.js');
const Datatype = require('sequelize');
const CampingSite = require('./campingSite.js');
const Extra = require('./extra.js');
const MealsPrice = require('./mealsPrice.js');

const CampingOwner = sequelize.define('CampingOwner',{
    ownerId: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ownerName: {
        type: Datatype.STRING,
        allowNull: false
    },
    campingName: {
        type: Datatype.STRING,
        allowNull: false
    },
    adress: {
        type: Datatype.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: Datatype.STRING,
        allowNull: false
    },
    email: {
        type: Datatype.STRING,
        allowNull: false
    },
    password: {
        type: Datatype.STRING,
        allowNull: false
    }

});

CampingOwner.hasMany(CampingSite,{
    foreignKey: 'ownerId'    
});


CampingOwner.hasMany(Extra,{
    foreignKey: 'ownerId'    
});


CampingOwner.hasMany(MealsPrice,{
    foreignKey: 'ownerId'    
});


module.exports = CampingOwner;