const express = require("express");
const userRoute = express.Router();
const Controllers = require("../controllers");
const { verifyToken } = require("../middleware/auth");
const { uploadFile } = require("../middleware/uploads");



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

userRoute.post('/:userId/image/', uploadFile, (req, res) => { // uses multer middleware function to upload images before controller function runs
    Controllers.userController.addProfilePhoto(req, res)
})

userRoute.post('/sendpw', (req, res) => { 
    Controllers.userController.sendPassword(req, res)
})

module.exports = userRoute;