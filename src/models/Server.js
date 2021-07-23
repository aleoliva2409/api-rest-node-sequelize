const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('../routes/index');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
  }

  routes() {
    this.app.use("/api", routes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`listening on port: ${this.port}`)
    })
  }
}

module.exports = Server
