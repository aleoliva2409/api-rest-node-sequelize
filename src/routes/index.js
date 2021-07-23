const { Router } = require("express");

// ? Import all routes
// ? const productRouter = require("./product.routes")

const testsRouter = require("./tests.routes");


const router = Router();

// ? config routers
// ? router.use("/products" , productRouter)

router.use("/tests", testsRouter);


module.exports = router;
