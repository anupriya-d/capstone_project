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
    reviewRoute.get('/user/:id', (req, res) => {
        Controllers.reviewController.getReviewsByUserId(req, res);
    });

    reviewRoute.delete('/:id', (req, res) => {
        Controllers.reviewController.deleteReview(req, res);
    });
   
    reviewRoute.put('/:id',(req, res) => {
        Controllers.reviewController.updateReview(req, res);
    });
   
module.exports = reviewRoute;