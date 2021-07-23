const { Router } = require("express");
const { testsController } = require("../controllers/tests.controller");
const router = Router();

router.get("/", testsController);

module.exports = router;