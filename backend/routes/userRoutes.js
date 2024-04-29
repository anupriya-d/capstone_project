const express = require("express");
const userRoute = express.Router();
const Controllers = require("../controllers");
const { verifyToken } = require("../middleware/auth");




userRoute.get('/',  (req, res) => {
    Controllers.userController.getUsers(res);
})

userRoute.post('/login', (req, res) => {
    Controllers.userController.loginUser(req, res)
})

userRoute.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res)
})

userRoute.post('/register', (req, res) => {
    Controllers.userController.registerUser(req, res)
})



module.exports = userRoute;