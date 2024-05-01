"use strict";
//getting all supported modules 
const { sendMail } = require("../libraries/sendMail");
let Models = require("../models");

//Create a New Booking
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

//Get all bookings with complete user and track data
const getAllBookings = (res) => {
  Models.Booking.find({})
    .populate("user")
    .populate("track")
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// deletes the Booking matching the ID from the param
const deleteBooking = (req, res) => {
  Models.Booking.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//Get Booking by user id to display when user looged in their page(MyPage)
const getBookingsByUserId = async (req, res) => {
  try {
    const reviews = await Models.Booking.find({ user: req.params.id }).populate(
      "track"
    );
    res.send({ result: 200, data: reviews });
  } catch (err) {
    console.error(err);
    res.send({ result: 500, error: err.message });
  }
};

//export all modules to route
module.exports = {
  createBooking,
  getAllBookings,
  deleteBooking,
  getBookingsByUserId,
};
