const sequelize = require("./dbInit")
const Test1 = require("../models/Test1")
const Test2 = require("../models/Test2")

// Relations
Test1.belongsToMany(Test2, { through: "test1_test2"})
Test2.belongsToMany(Test1, { through: "test1_test2"})

module.exports = sequelize