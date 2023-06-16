const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Category = db.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt:{
    type : DataTypes.DATEONLY,
    allowNull: false,

  },
  updatedAt:{
    type : DataTypes.DATEONLY,
    allowNull: false,

  }

},{
    freezeTableName:true,
    timestamps: true,
    tableName: 'Category',
}
);


Category.sync({alter : true}).then(() => {
    console.log("Category Sync")
})

module.exports = Category;
