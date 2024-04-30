"use strict";
const Models = require("../models");
const bcrypt = require('bcryptjs') // first run 'npm install bcryptjs'
const { createToken } = require('../middleware/auth');
const {sendPasswordMail} = require("../libraries/sendMail");
const user = require("../models/user");


const registerUser = async (req, res) => {
  try {
      // Get user input by destructuring request body
      const { firstName, lastName, email, password } = req.body;

      // Validate user input
      if (!(email && password && firstName && lastName)) {
          res.status(400).json({ result: "All input is required"});
          return;
      }

      // Validate if user exists in our database
      const oldUser = await Models.User.findOne({ email });

      if (oldUser) {
          res.status(409).json({ result: "User already exists. Please login" });
          return;
      }

      // Encrypt user password
      const encryptedPassword = await bcrypt.hash(password, 10);

      // Create user in our database
      const user = await Models.User.create({
          firstName,
          lastName,
          email: email.toLowerCase(), // sanitize: convert email to lowercase
          password: encryptedPassword,
      });

      // Create token
      const token = createToken(user._id, email);

      // Attach token to user document
      user.token = token;

      // Return new user
      res.status(201).json({ result: "User successfully registered", data: user });
  } catch (err) {
      console.error(err);
      res.status(500).json({ result: err.message });
  }
};

const createUser = (data, res) => {
    Models.User.create(data).then(function (data) {
        res.status(200).json({ result: 'User created successfully', data: data })
    }).catch(err => {
        res.status(500).json({ result: err.message })
    })
}


const loginUser = async (req, res) => {
  try {
      // Get user input from request body
      const { email, password } = req.body;

      // Validate user input
      if (!(email && password)) {
          res.status(400).json({ result: "All input is required" });
          return; // when sending responses and finishing early, manually return or end the function to stop further processing
      }
      // Validate if user exists in our database
      const user = await Models.User.findOne({ email: email }).lean();
      console.log(user);
      console.log(req.body);
      // if they do exist, make sure their password matches - need to check encrypted version of password
      if (user && (await bcrypt.compare(password, user.password))) {
          // Create token for use based on their id and email
          const token = createToken(user._id, email,user.userRole);
          // save user token

        // res.cookie('token', token, { httpOnly: true });
          
          user.token = token;
            
          
           
          // send back logged in user details including token
          res.status(200).json({ result: 'User successfully logged in', data:user});
      }
      else res.status(400).json({ result: "Invalid user credentials" });
  } catch (err) {
      console.log(err);
      res.status(500).json({ result: err.message })
  }
}

const getUsers = (res) => {
    // finds all users
    Models.User.find({})
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  };

  const addProfilePhoto = (req, res) => {

    console.log(req.file) // saved filename is in req.file.filename
    const userUpdates = { profilePhoto: '/images/' + req.file.filename};
    console.log(userUpdates);
  
    // save path to uploaded file in DB for this user
    Models.User.findByIdAndUpdate(req.params.userId, userUpdates, 
      
      { new: true }
    ).then(response => 
        res.status(200).json({ result: 'Image uploaded to profile successfully', data: response}) // send updated info back in response
    ).catch(err => 
        res.status(500).json({ result: err.message })
    )
  }
  

  const sendPassword = async (req, res) => {
    const { email } = req.body;

    try {
        // reset password to last 10 chars of email address, then send an email notifying them
        let plainTextPw =email.substring(email.length - 10)
        let newPassword = await bcrypt.hash(plainTextPw,10);
        
        const updatedUser = await Models.User.findOneAndUpdate(
            { email: email }, 
            { password: newPassword }, 
            { new: true }
        );

        if (!updatedUser) {
            res.status(404).json({result: 'User with email '+email+' not found, register first'});
            return;
        }
        updatedUser.password =plainTextPw;
         // only send email if user with that email exists
    sendPasswordMail(updatedUser).then(response => {
        res.status(200).json({result: 'Reset email sent successfully, check your email'});
    }).catch(error => {
        console.log(error.response.body.errors);
        res.status(500).json({result: 'Error sending email: '+error.message});
    });
    } catch (err) {
        console.log(err);
        res.status(404).json({result: 'Password not reset: ' + err.message});
        return;
    }

   
}





module.exports = {
    registerUser, createUser,loginUser,getUsers,addProfilePhoto,sendPassword
}