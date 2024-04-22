import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia,Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { parks } from '../data/nationalParks';


function ExploreParks() {
    return (
      <Grid container spacing={3} sx={{ justifyContent:'center'}}>
        {parks.map((place, index) => (
          <Grid item xs={12}  md={3} key={index} sx={{marginTop:'60px'}}>
            <Card  sx={{
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                   
                },
                backgroundColor:'#F1D18A'
              }}>
              <CardMedia
                component="img"
                height="200"
                image={place.image}
                alt={place.name}
              />
              <CardContent sx={{  }}>
                <Typography variant="h6" component="h2">
                  {place.name}
                </Typography>
                <Typography variant="p" color="text.secondary">
                  {place.descrpition}
                </Typography>
              
               </CardContent>
  
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };


  export default ExploreParks;