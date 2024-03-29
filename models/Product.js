// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}


Product.init(
  {
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    stock: {
     type: DataTypes.INTEGER,
     allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    Product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
