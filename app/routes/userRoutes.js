const express = require("express");

const userController = require("../controller/userController");

const userRoutes = function (app) {
  const router = express.Router();
  router.route("/list").get(userController.allUsers);
  router.route("/saveData").post(userController.saveUser);
  router.route("/update").put(userController.updateRecord);
  router.route("/delete").delete(userController.deleteData);
  router.route('/',).get((req, res) => {
    res.json('WELCOME TO NTY CRUD APPLICATION')
  })

  return router;
};
module.exports = userRoutes;