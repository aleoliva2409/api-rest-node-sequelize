const { DataTypes } = require("sequelize")
const sequelize = require("../database/dbInit")

const Test2 = sequelize.define("test2",{
  name: {
    type: DataTypes.STRING,
  }
})

module.exports = Test2;
