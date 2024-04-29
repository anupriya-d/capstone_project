// Footer.js

import React from 'react';
import { Typography, Container } from '@mui/material';

// Inline styles for the footer
const footerStyle = {
  backgroundColor: '#393F44', 
  color:'white',
  padding: '2rem 0',
  marginTop: '20px', 
  fontFamily: 'sans-serif',
};

const MyFooter = () => {
  return (
    <footer style={footerStyle}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          ALPINE ADVENTURE
        </Typography>
        <Typography variant="h6" align="center" color="white" fontSize="1rem">
          © {new Date().getFullYear()} Alpine Adventures. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default MyFooter;
