"use strict";
//getting all supported modules 
let Models = require("../models");

//create a new review
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
  
  //get all review with user and track data 
  const getReviews = ( res) => {
    Models.Review.find({}).populate('track').populate('user')
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//get all review by id
const getReviewById = (req, res) => {
 
  Models.Review.findById(req.params.id)
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
          console.log(err);
          res.send({ result: 500, error: err.message });
      });
};

//get all review by by trackID to display on track page
const getReviewsByTrackId = async (req, res) => {
  try {
    const reviews = await Models.Review.find({ track: req.params.id }).populate('user');
    res.send({ result: 200, data: reviews });
  } catch (err) {
    console.error(err);
    res.send({ result: 500, error: err.message });
  }
};

//get all review by by userID to display on userpage
const getReviewsByUserId = async (req, res) => {
  try {
    const reviews = await Models.Review.find({ user: req.params.id }).populate('track')
    res.send({ result: 200, data: reviews });
  } catch (err) {
    console.error(err);
    res.send({ result: 500, error: err.message });
  }
};


 // deletes the Review matching the ID from the param for admin purposes
 const deleteReview = (req, res) => {
  Models.Review.findByIdAndDelete(req.params.id)
   .then((data) => res.send({ result: 200, data: data }))
   .catch((err) => {
     console.log(err);
     res.send({ result: 500, error: err.message });
   });
};

module.exports = {createReview,getReviews,getReviewById,getReviewsByTrackId,getReviewsByUserId,deleteReview}