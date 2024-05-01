"use strict";
//get all required modules
let Models = require("../models");


//create track 
const createTrack = (data, res) => {
  console.log(data);
  new Models.Track(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

  
//to get all  track 
  const getAllTracks = ( res) => {
    Models.Track.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};


const getTrackById = (req, res) => {
 
  Models.Track.findById(req.params.id)
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
          console.log(err);
          res.send({ result: 500, error: err.message });
      });
};

const getTracksByType = (req, res) => {
  const type = req.params.type;

  Models.Track.find({ trackType: type })
      .then((data) => {
        if (data.length === 0) {
          // No data found
          res.status(404).send({ result: 404, message: "No tracks found for this type." });
        } else {
          // Data found
          res.status(200).send({ result: 200, data: data });
        }
      })
      .catch((err) => {
          console.error(err);
          res.status(500).send({ result: 500, error: err.message });
      });
};


const getTracksByPark = (req, res) => {
  const area = req.params.area;

  Models.Track.find({ area: area })
      .then((data) => {
        if (data.length === 0) {
          // No data found
          res.status(404).send({ result: 404, message: "No tracks found for this type." });
        } else {
          // Data found
          res.status(200).send({ result: 200, data: data });
        }
      })
      .catch((err) => {
          console.error(err);
          res.status(500).send({ result: 500, error: err.message });
      });
};

const addTrackImage = (req, res) => {

  console.log(req.file) // saved filename is in req.file.filename
  const trackUpdates = { image: '/images/' + req.file.filename};
  console.log(trackUpdates);

  // save path to uploaded file in DB for this user
  Models.Track.findByIdAndUpdate(req.params.trackId, trackUpdates, 
    
    { new: true }
  ).then(response => 
      res.status(200).json({ result: 'Image uploaded to profile successfully', data: response}) // send updated info back in response
  ).catch(err => 
      res.status(500).json({ result: err.message })
  )
}






module.exports = {createTrack,getAllTracks,getTrackById,getTracksByType,getTracksByPark,addTrackImage}