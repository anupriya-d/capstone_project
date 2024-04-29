import React from 'react';
import { Card, CardContent, Typography, Button, Grid,CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

function TrackCard({ track }) {
  return (
    
    <Grid item xs={12} sm={6} md={4}>
      <Card raised>
      <CardMedia
        component="img"
        alt="track image"
        height="240"
        image={track.image}
      />
        <CardContent>
          <Typography variant="h5" component="div">
            {track.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location: {track.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            National Park: {track.area}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Time to walk: {track.duration}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Difficulty : {track.trackType}
          </Typography>

          <Link to={`/track/${track._id}/${track.title}`} style={{ textDecoration: 'none' }}>
            <Button sx={{ backgroundColor: '#393F44', marginTop: 'auto', color: 'white' }}>
              Explore More
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default TrackCard;

