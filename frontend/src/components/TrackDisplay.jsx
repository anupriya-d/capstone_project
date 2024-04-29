import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherData from './WeatherData';
import { Link } from 'react-router-dom';
import { Card, CardMedia, Grid, Typography, Button, Link as MuiLink } from '@mui/material';
import MyMap from './MyMap';

const TrackDisplay = ({ trackId }) => {
    const [track, setTrack] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrack = async () => {
            setIsLoading(true); 
            try {
                const response = await axios.get(`/tracks/${trackId}`);
                console.log('Response:', response.data); 
                setTrack(response.data.data); 
                setIsLoading(false);
            } catch (error) {
                console.error('Fetching error:', error.response ? error.response.data : error);  
                setError(error.response ? error.response.data : 'An unknown error occurred');
                setIsLoading(false);
            }
        };
    
        fetchTrack();
    }, [trackId]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!track) return <p>No track found</p>;

    return (
        <>
        <div style={{ padding: '20px', margin: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor:'#9DBC98 ' }}>
            <Typography variant="h4" gutterBottom>
                {track.title}
            </Typography>
            
            <Grid container spacing={3}>
                
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="600"
                            image={track.image}
                            alt={track.title}
                        />
                         
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                       
                         <MyMap key="map" latitude={track.locationCoordinates[0]} longitude={track.locationCoordinates[1]} />
                    </Card>
                </Grid>
                
                    <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Location:</strong> {track.location}</Typography>
                    <Typography variant="body1"><strong>Area:</strong> {track.area}</Typography>
                    <Typography variant="body1"><strong>Description:</strong> {track.description}</Typography>
                    <Typography variant="body1"><strong>Duration:</strong> {track.duration}</Typography>
                    <Typography variant="body1"><strong>Length:</strong> {track.length} meters</Typography>
                    <Typography variant="body1"><strong>Elevation Gain:</strong> {track.elevation} meters</Typography>
                    <Typography variant="body1"><strong>Hiking Gears You Need:</strong> {track.hikingGears.map((gear, index) => index === 0 ? gear : ` | ${gear}`)}</Typography>
                    <Typography variant="body1"><strong>Track ID:</strong> {track._id}</Typography>
                    <Typography variant="body1"><strong>Guided Tour Available:</strong> {track.guidedTourStatus ? 'Yes' : 'No'}</Typography>
                    {track.guidedTourStatus && (
                        <>
                            <Typography variant="body1"><strong>Tour Fee:</strong> ${track.guidedTourFee}</Typography>
                            <Link to={`/booking/${track._id}/${track.title}`} style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="primary" onClick={() => console.log(track.title)}>
                                    BOOK NOW
                                </Button>
                            </Link>
                        </>
                    )}
                </Grid>
            </Grid>

           
        </div>

        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '20px' }}>

        <WeatherData city={track.location}/>
        
        
        </div>
        </>
    );
};

export default TrackDisplay;
