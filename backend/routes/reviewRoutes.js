const express = require('express');
const reviewRoute = express.Router();
let Controllers = require("../controllers");


reviewRoute.post('/create', (req, res) => {
        Controllers.reviewController.createReview(req.body, res);
    });

    reviewRoute.get('/', (req, res) => {
        Controllers.reviewController.getReviews(res);
    });

    reviewRoute.get('/:id', (req, res) => {
        Controllers.reviewController.getReviewById(req, res);
    });

    reviewRoute.get('/track/:id', (req, res) => {
        Controllers.reviewController.getReviewsByTrackId(req, res);
    });
module.exports = reviewRoute;