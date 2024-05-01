const sequelize = require('../../config/index.js');
const Datatype = require('sequelize');

const Reservation = sequelize.define('reservation',{
    id: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    dateReservation: {
        type: Datatype.DATEONLY,
        allowNull: false
    },
    startTime: {
        type: Datatype.TIME,
        allowNull: false
    },
    endTime: {
        type: Datatype.TIME,
        allowNull: false
    },
    status: {
        type: Datatype.BOOLEAN,
        allowNull: false
    }

})

module.exports = Reservation;