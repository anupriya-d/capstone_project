const mongoose = require('mongoose');

//define fields for track schema
const trackSchema = new mongoose.Schema({
    title: { type: String, trim: true, required: true },
    location:{ type: String },
    locationCoordinates: [Number],
    area:{ type: String },
    image: { type: String},
    duration:{type:String},
    description:{ type: String },
    length: { type:Number },
    elevation:{type:Number},
    trackType:{type: [String],enum: ['easy', 'short','great','tramping']},
    hikingGears: [String],
    guidedTourStatus:{ type: Boolean },
    guidedTourFee:{ type: Number },
    trackEnteredAt: { type: Date, default: Date.now }
    
});


module.exports = mongoose.model('Track', trackSchema);