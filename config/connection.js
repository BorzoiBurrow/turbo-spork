require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    decimalNumbers: true,
  },
});
    sequelize.sync() 
  .then(() => {
    console.log('synced');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = sequelize;
