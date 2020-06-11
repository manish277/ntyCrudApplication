const express = require("express");

const userController = require("../controller/userController");

const userRoutes = function(app) {
    const router = express.Router();
    router.route("/list").get(userController.allUsers);
    router.route("/saveData").post(userController.saveUser);
    router.route("/update").put(userController.updateRecord);
    router.route("/delete").delete(userController.deleteData);
    
    return router;
  };
  module.exports = userRoutes;