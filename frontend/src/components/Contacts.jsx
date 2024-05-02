import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import mailadd from '../assets/add.png'
import phone from '../assets/phone.png'
import email from '../assets/email.png'

function Contacts() {
  return (
    <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
      <Grid item xs={12} md={9} sx={{ marginTop: '60px', margin: '20px' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                backgroundColor: '#BEBEBE',
              }}
            >
              <CardMedia component="img" height="200"  image={phone} />
              <CardContent>
              <Typography>Call Us</Typography>
                <Typography>+64 00000000</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                backgroundColor: '#BEBEBE',
              }}
            >
              <CardMedia component="img" height="200"  image={mailadd} />
              <CardContent>
              <Typography>Visit Us</Typography>
                <Typography>0001A , Wanaka, Central Otago,NZ</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                backgroundColor: '#BEBEBE',
              }}
            >
              <CardMedia component="img" height="200" image={email} />
              <CardContent>
              <Typography>Please Send Your Enquiries to :</Typography>
                <Typography>contact.us@alpineadv.com</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contacts;
