const express = require('express');
const reviewRoute = express.Router();
let Controllers = require("../controllers");


reviewRoute.post('/create', (req, res) => {
        Controllers.reviewController.createReview(req.body, res);
    });


module.exports = reviewRoute;