const mongoose = require('mongoose');

//define fields for review schema
const reviewSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    track: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }],
    review: { type: String, trim: true, required: true, unique: true },
    rating:{ type: String },
    reviewdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Review', reviewSchema);