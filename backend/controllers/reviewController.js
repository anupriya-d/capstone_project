"use strict";

let Models = require("../models");

const createReview = (data, res) => {
    console.log(data);
    new Models.Review(data)
      .save()
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  };
  
  const getReviews = ( res) => {
    Models.Review.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};


const getReviewById = (req, res) => {
 
  Models.Review.findById(req.params.id)
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
          console.log(err);
          res.send({ result: 500, error: err.message });
      });
};


const getReviewsByTrackId = async (req, res) => {
  try {
    const reviews = await Models.Review.find({ track: req.params.id }).populate('user');
    res.send({ result: 200, data: reviews });
  } catch (err) {
    console.error(err);
    res.send({ result: 500, error: err.message });
  }
};


module.exports = {createReview,getReviews,getReviewById,getReviewsByTrackId}