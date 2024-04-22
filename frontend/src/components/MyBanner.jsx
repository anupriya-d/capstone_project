import React from 'react';
import { Box, Card, CardMedia } from '@mui/material';
import bannerPhoto from '../assets/Brewster.jpg';

function MyBanner() {
  return (
    <Box sx={{ position: 'relative', height: '40vh' }}>
      <Card sx={{ position: 'relative', borderRadius: 0, height: '100%' }}>
        <CardMedia
          component="img"
          image={bannerPhoto}
          alt="Hiking Banner"
          sx={{ height: '100%', objectFit: 'cover', borderRadius: 0 }}
        />
      </Card>
    </Box>
  );
}

export default MyBanner;