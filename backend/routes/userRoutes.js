const express = require('express');
const userRoute = express.Router();
let Controllers = require("../controllers");

userRoute.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
    });

userRoute.post('/create', (req, res) => {
        Controllers.userController.createUser(req.body, res);
    });


module.exports = userRoute;