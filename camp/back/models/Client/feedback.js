const sequelize = require('../../config/index.js');
const Datatype = require('sequelize');


const Feedback = sequelize.define("Feedback",{
    id: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    message: {
        type: Datatype.STRING,
        allowNull: false
    },
});



module.exports = Feedback;