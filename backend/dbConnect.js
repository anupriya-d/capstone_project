'use strict';
//define mongoose
const Mongoose = require('mongoose');

//url to mongodb atlas
const uri = process.env.DB_URI ||
`mongodb+srv://anupriyad:iodtest%40202A@cluster0.9qwzb92.mongodb.net/hiking?retryWrites=true&w=majority&appName=Cluster0`;
// Connect to MongoDB

Mongoose.connect(uri)
.then(() => console.log('MongoDB Connected'))
.catch(error => console.log('MongoDB Error:'+error.message));
// Get the default connection

const db = Mongoose.connection;

// Bind connection to error event (to get notification ofconnection errors)
db.on("error", console.error.bind(console, "MongoDBconnection error:"));
exports.Mongoose = Mongoose;