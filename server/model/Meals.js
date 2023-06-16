const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const FoodItem = db.define('FoodItem', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ingredients: {
    type: DataTypes.STRING,
    allowNull: false
  },
  calories: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt:{
    type : DataTypes.DATEONLY,
    allowNull: false,

  },
  updatedAt:{
    type : DataTypes.DATEONLY,
    allowNull: false,

  }
}, 

{
    tableName : 'FoodItem',
    freezeTableName : true,
    timestamps: true,
});


FoodItem.sync({alter : true}).then*(() => {
    console.log('FoodItem Sync')
})

module.exports = FoodItem;
