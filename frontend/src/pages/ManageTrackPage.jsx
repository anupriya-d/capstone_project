import React, { useState } from 'react';
import { Button } from '@mui/material';
import MyAppBar from '../components/MyAppBar';
import TrackForm from '../components/TrackForm';
import TrackImageUpload from '../components/TrackImageUpload';
import DisplayBookings from '../components/DisplayBookings';
import MyFooter from '../components/MyFooter';
import DisplayReviews from '../components/DisplayReviews';


export default function ManageTrackPage(props) {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'imageUpload':
        return <TrackImageUpload />;
      
      case 'displayBookings':
        return <DisplayBookings />;
    
        case 'displayReviews':
          return <DisplayReviews/>;
          

      default:
        return null;
    }
  };

  return (
    <>
      
      <MyAppBar />
      <div style={{ padding: '20px', margin: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor:'#F7B787 ' }}>
      <TrackForm/>
      </div>
      <div style={{ padding: '20px', margin: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor:'#F7B787 ' }}>
      
      <Button variant="contained" onClick={() => setSelectedComponent('imageUpload')} sx={{ m: 1 }}>
         Image Upload
      </Button>
      <Button variant="contained" onClick={() => setSelectedComponent('displayBookings')} sx={{ m: 1 }}>
         Display Bookings
      </Button>
      <Button variant="contained" onClick={() => setSelectedComponent('displayReviews')} sx={{ m: 1 }}>
        Display Reviews
      </Button>

     

      {renderComponent()}
      </div>
      <MyFooter />
    </>
  );
}
