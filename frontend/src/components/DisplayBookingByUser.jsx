import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayBookingByUser = ({ userId}) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    
    const fetchBookingss = async () => {
      try {
        
        const response = await axios.get(`/bookings/user/${userId}`); 
        setBookings(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchBookingss();
  }, []);

  return (
    <div>
      <h4>Bookings made by you</h4>

      {bookings.map(booking => (
        <div key={booking._id}>
          
          
          <p>Review: {booking.bookingDate}</p>
          
          <p>Review For: {booking.track && booking.track.length > 0 && booking.track[0].title}</p> 
          <br />
        </div>
      ))} 
    </div>
  );
};

export default DisplayBookingByUser ;