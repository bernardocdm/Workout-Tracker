const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userMiddleware = require("../middlewares/auth");

router.post("/", (req , res, next) => {
    next();
}, userController.createUser);

router.get("/", userMiddleware.authenticateToken, userController.getUsers);

router.post("/login", (req, res, next) => {
    next();
}, userController.loginUser);

module.exports = router;