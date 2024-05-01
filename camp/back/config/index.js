const Sequelize = require('sequelize')

const sequelize = new Sequelize('camping', 'root', '07438283', {
    dialect:'mysql',
    host: 'localhost',
    }
)

sequelize.sync({force: false})
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.log('Error connecting to database', err));

module.exports = sequelize