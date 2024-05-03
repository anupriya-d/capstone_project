const express = require('express');
const trackRoute = express.Router();
const Controllers = require("../controllers");
const { uploadFile } = require("../middleware/uploads");
const{verifyToken} = require('../middleware/auth')

trackRoute.get('/', (req, res) => {
    Controllers.trackController.getAllTracks(res);
});

trackRoute.post('/create',verifyToken, (req, res) => {
    Controllers.trackController.createTrack(req.body, res);
});

trackRoute.get('/:id', (req, res) => {
    Controllers.trackController.getTrackById(req, res);
});

trackRoute.get('/byType/:type', (req, res) => {
    Controllers.trackController.getTracksByType(req, res);
});


trackRoute.get('/byPark/:area', (req, res) => {
    Controllers.trackController.getTracksByPark(req, res);
});

trackRoute.post('/:trackId/image/', uploadFile, (req, res) => { // uses multer middleware function to upload images before controller function runs
    Controllers.trackController.addTrackImage(req, res)
})

trackRoute.delete('/:id', (req, res) => {
    Controllers.trackController.deleteTrack(req, res);
});


module.exports = trackRoute;
