const apiRouter = require("express").Router();

apiRouter.use("/tym", require("./Tym"));

module.exports = apiRouter;
