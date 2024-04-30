"use strict";

const sendMail = require("../libraries/sendMail");
let Models = require("../models");

const createBooking = (data, res) => {
  console.log(data);
  new Models.Booking(data)
    .save()
    .then(() => {
      Models.User.findById(data.user).then((user) => {
        sendMail(user);

        res.send({ result: 200, data: data });
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = { createBooking };
