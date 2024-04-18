const mongoose = require('mongoose');

//define fields for track schema
const trackSchema = new mongoose.Schema({
    title: { type: String, trim: true, required: true },
    location: [String],
    locationCoordinates: [Number],
    area:{ type: String },
    image: { type: String},
    duration:{type:Number},
    description:{ type: String },
    length: { type:Number },
    elevation:{type:Number},
    trackType:{type:String,enum:['Easy','Short','Great','Tramping'],default:'Easy'},
    hikingGears: [String],
    guidedTourStatus:{ type: Boolean },
    guidedTourFee:{ type: Number },
    trackEnteredAt: { type: Date, default: Date.now }
    
});


module.exports = mongoose.model('Track', trackSchema);