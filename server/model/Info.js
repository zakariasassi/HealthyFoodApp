const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Info = db.define('Info', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description:{
    type : DataTypes.TEXT,
    allowNull: false,

  },
  createdAt:{
    type : DataTypes.DATEONLY,
    allowNull: false,

  }

},{
    freezeTableName:true,
    timestamps: true,
    tableName: 'Info',
}
);


Info.sync({alter : true}).then(() => {
    console.log("Info Sync")
})

module.exports = Info;
