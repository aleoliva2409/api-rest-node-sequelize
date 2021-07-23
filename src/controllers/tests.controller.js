// Import your models if you need or packages
// const { Sequelize } = require('sequelize')

const testsController = async(req, res) => {
  try {
    res.status(200).send("<h1 align='center'>Hello World!</h1>")
  } catch (error) {
    console.log(error)
    res.status(500)
  }
}

module.exports = {
  testsController
}
