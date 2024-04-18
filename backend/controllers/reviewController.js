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
  


module.exports = {createReview}