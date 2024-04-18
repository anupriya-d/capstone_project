const mongoose = require('mongoose');

//define fields for booking schema
const bookingSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    track: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }],
    bookingDate: { type: Date},
    bookedAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Booking', bookingSchema);