import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { walks } from '../data/nationalParks';

function ExploreActivity() {
  return (
    <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
      {walks.map((walk, index) => (
        <Grid item xs={12} md={2} key={index} sx={{ marginTop: '60px', marginLeft: '20px', marginRight: '20px' }}>
          <Card sx={{
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
            backgroundColor: '#BEBEBE'
          }}>
            <CardMedia
              component="img"
              height="200"
              image={walk.image}
              alt={walk.name}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" component="h2">
                {walk.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {walk.descrpition}  {/* Fixed typo here */}
              </Typography>
              <Link to={`/activity/${walk.name}`} style={{ textDecoration: 'none' }}>
                <Button sx={{ backgroundColor: '#393F44', marginTop: 'auto', color: 'white' }}>
                  Explore More
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ExploreActivity;
