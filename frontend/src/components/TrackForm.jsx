import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Box,
  Typography,
  Grid,
  Container
} from '@mui/material';
import { useUserContext } from '../context/UserContext';

const TrackForm = () => {
 const {currentUser} = useUserContext(); 
    const [track, setTrack] = useState({
        title: '',
        location: '',
        locationCoordinates: '',
        area: '',
        image: '',
        duration: '',
        description: '',
        length: '',
        elevation: '',
        trackType: [],
        hikingGears: [],
        guidedTourStatus: false,
        guidedTourFee: '',
        trackEnteredAt: new Date()
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "locationCoordinates") {
            setTrack(prevState => ({
                ...prevState,
                [name]: value.split(",").map(num => parseFloat(num.trim()))
            }));
        } else {
            setTrack(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setTrack(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setTrack(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const headers = {
            "x-access-token":currentUser.token
        }
        try {
            const response = await axios.post('/tracks/create', track,{headers:headers});  
            console.log('Review submitted:', response.data);
        } catch (error) {
            console.error('Failed to submit review:', error);
        }
    };

    return (
        <Container component="main" maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1, width: '100%' }}>
                <Typography variant="h6" gutterBottom>
                    Track Details
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={6}>
                       
                        <TextField fullWidth required margin="normal" 
                        id="title" 
                        label="Title" 
                        name="title" 
                        value={track.title} 
                        onChange={handleChange} />

                        <TextField fullWidth margin="normal" 
                        id="location" label="Location" 
                        name="location" value={track.location} 
                        onChange={handleChange} />

                        <TextField fullWidth margin="normal" 
                        id="locationCoordinates" 
                        label="Location Coordinates (comma separated)" 
                        name="locationCoordinates" value={track.locationCoordinates} 
                        onChange={handleChange} 
                        helperText="Enter coordinates as latitude, longitude" />

                        <TextField fullWidth margin="normal" 
                        id="area" label="Area" 
                        name="area" value={track.area} 
                        onChange={handleChange} />

                        <TextField fullWidth margin="normal" 
                        id="image" label="Image URL" 
                        name="image" value={track.image} 
                        onChange={handleChange} />

                        <TextField fullWidth margin="normal" 
                        id="duration" label="Duration" 
                        name="duration" value={track.duration} 
                        onChange={handleChange} />
                        <TextField fullWidth margin="normal" 
                        id="description" 
                        label="Description" 
                        name="description" 
                        multiline rows={4} 
                        value={track.description} 
                        onChange={handleChange} />

                        <TextField fullWidth margin="normal" 
                        id="length" 
                        label="Length (in meters)" 
                        name="length" type="number" 
                        value={track.length} 
                        onChange={handleChange} />

                        <TextField fullWidth margin="normal" 
                        id="elevation" 
                        label="Elevation (in meters)" 
                        name="elevation" type="number" 
                        value={track.elevation} 
                        onChange={handleChange} />

                        <FormControl fullWidth margin="normal">
                            <InputLabel id="trackType-label">Track Type</InputLabel>
                            <Select labelId="trackType-label" 
                            id="trackType" multiple 
                            name="trackType" 
                            value={track.trackType} 
                            onChange={handleSelectChange} 
                            label="Track Type">
                                {['easy', 'short', 'great', 'tramping'].map(type => (
                                    <MenuItem key={type} value={type}>{type}</MenuItem>
                                ))}
                            </Select>

                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="hikingGears-label">Hiking Gears</InputLabel>
                            <Select labelId="hikingGears-label" 
                            id="hikingGears" 
                            multiple name="hikingGears" 
                            value={track.hikingGears} 
                            onChange={handleSelectChange} 
                            label="Hiking Gears">

                                {['Hiking boots', 'Warm clothes', 'Wind jacket', 'Water bottle','Sleeping bag','Hiking poles'].map(gear => (
                                    <MenuItem key={gear} value={gear}>{gear}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={track.guidedTourStatus} onChange={handleCheckboxChange} name="guidedTourStatus" />} label="Guided Tour?" />
                        </FormGroup>
                        <TextField fullWidth margin="normal" id="guidedTourFee" label="Guided Tour Fee" name="guidedTourFee" type="number" value={track.guidedTourFee} onChange={handleChange} />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default TrackForm;
