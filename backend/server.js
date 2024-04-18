const express = require('express');



const app =express();
const PORT = process.env.PORT || 8000;

let dbConnect = require("./dbConnect");

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({messege: 'Welcome to My Hiking Application'});
});

let userRoutes = require("./routes/userRoutes");//for users
app.use("/users", userRoutes);

let trackRoutes = require("./routes/trackRoutes");//for users
app.use("/tracks", trackRoutes);

let reviewRoutes = require("./routes/reviewRoutes");//for users
app.use("/reviews", reviewRoutes);

let bookingRoutes = require("./routes/bookingRoutes");//for users
app.use("/bookings", bookingRoutes);

app.listen(PORT,()=> {
    console.log(`Server Running on PORT ${PORT}`);
});
