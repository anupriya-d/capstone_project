const express = require('express');
const bookingkRoute = express.Router();
let Controllers = require("../controllers");


bookingkRoute.post('/create', (req, res) => {
        Controllers.bookingController.createBooking(req.body, res);
    });


module.exports = bookingkRoute;