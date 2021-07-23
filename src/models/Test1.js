const { DataTypes } = require("sequelize")
const sequelize = require("../database/dbInit")

const Test1 = sequelize.define("test1",{
  name: {
    type: DataTypes.STRING,
  }
})

module.exports = Test1;
