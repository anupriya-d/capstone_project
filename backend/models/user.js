const mongoose = require('mongoose');

//define fields for user schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, unique: true },
    password:{ type: String },
    profilePhoto:{ type: String },
    createdAt: { type: Date, default: Date.now },
    userRole:{type:String,enum:['user','admin'],default:'user'}
});


module.exports = mongoose.model('User', userSchema);