const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");

const admin = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    last_login: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    createdAt : {
      type: DataTypes.DATEONLY
    },
    updatedAt : {
      type: DataTypes.DATEONLY
    }
  },
  {
    freezeTableName: true,
    tableName: "users",
    timestamps: true,
  }
);

admin.sync({ alter: true }).then(() => {
  console.log("Users table sync successful");
});

module.exports = admin;
