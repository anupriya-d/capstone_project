import React from 'react';
import { Box, Card, CardMedia } from '@mui/material';


function MyBannerSmall({image}) {
  return (
    <Box sx={{ position: 'relative', height: '20vh' }}>
      <Card sx={{ position: 'relative', borderRadius: 0, height: '100%' }}>
        <CardMedia
          component="img"
          image={image}
          alt="Hiking Banner"
          sx={{ height: '100%', objectFit: 'cover', borderRadius: 0 }}
        />
      </Card>
    </Box>
  );
}

export default MyBannerSmall;