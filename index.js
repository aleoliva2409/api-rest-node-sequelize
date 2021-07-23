const Server = require("./src/models/Server");
const sequelize = require("./src/database/relations")
const server = new Server();

const connect = async() => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
    server.listen(process.env.PORT);
    
  } catch (error) {
    console.log(error);
  }
};

connect();