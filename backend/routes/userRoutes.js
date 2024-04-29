const express = require('express');
const userRoute = express.Router();
const Controllers = require("../controllers");

userRoute.post('/signup', (req, res) => {
    Controllers.userController.createUser(req.body, res);
});

userRoute.post('/login', (req, res) => {
    Controllers.userController.loginUser(req.body, res);
});

module.exports = userRoute;
