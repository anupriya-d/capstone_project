const express = require('express');
const trackRoute = express.Router();
const Controllers = require("../controllers");


trackRoute.get('/', (req, res) => {
    Controllers.trackController.getTracks(res);
});

trackRoute.post('/create', (req, res) => {
    Controllers.trackController.createTrack(req.body, res);
});

module.exports = trackRoute;
