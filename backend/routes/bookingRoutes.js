const express = require('express');
const bookingkRoute = express.Router();
let Controllers = require("../controllers");


bookingkRoute.post('/create', (req, res) => {
        Controllers.bookingController.createBooking(req.body, res);
    });

    bookingkRoute.get('/', (req, res) => {
        Controllers.bookingController.getAllBookings(res);
    });

    bookingkRoute.delete('/:id', (req, res) => {
        Controllers.bookingController.deleteBooking(req,res);
    });

    bookingkRoute.get('/user/:id', (req, res) => {
        Controllers.bookingController.getBookingsByUserId(req, res);
    });
module.exports = bookingkRoute;