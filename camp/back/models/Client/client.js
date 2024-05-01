const sequelize = require('../../config/index.js');
const Datatype = require('sequelize');
const CampingSite = require ('../Owner/campingSite.js')
const Reservation = require('./reservation.js')
const CampingOwner = require('../Owner/campingOwner.js');
const Feedback = require('./feedback.js');
const Contact = require('./contact.js');

const Client = sequelize.define('Client',{
  clientId: {
    type: Datatype.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Datatype.STRING,
    allowNull: false
  },
  lastName: {
    type: Datatype.STRING,
    allowNull: false
  },
  email: {
    type: Datatype.STRING,
    allowNull: false
  },
  phone: {
    type: Datatype.STRING,
    allowNull: false
  },
  password: {
    type: Datatype.STRING,
    allowNull: false
  }
});

Client.belongsToMany(CampingSite,{through:Reservation});
CampingSite.belongsToMany(Client,{through: Reservation});

Client.belongsToMany(CampingOwner,{through:Feedback});

Client.belongsToMany(CampingOwner,{through:Contact});
CampingOwner.belongsToMany(Client,{through:Contact});

module.exports = Client;