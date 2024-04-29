"use strict";
const Models = require("../models");
const bcrypt = require('bcryptjs') // first run 'npm install bcryptjs'
const { createToken } = require('../middleware/auth');



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
      const user = await Models.User.findOne({ email: email });
      console.log(user);
      console.log(req.body);
      // if they do exist, make sure their password matches - need to check encrypted version of password
      if (user && (await bcrypt.compare(password, user.password))) {
          // Create token for use based on their id and email
          const token = createToken(user.id, email);
          // save user token

          res.cookie('token', token, { httpOnly: true });
          
          user.token = token;

          console.log(user)

          // send back logged in user details including token
          res.status(200).json({ result: 'User successfully logged in', data: user });
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

  


module.exports = {
    registerUser, createUser,loginUser,getUsers
}