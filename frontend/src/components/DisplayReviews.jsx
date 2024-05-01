import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    
    const fetchReviews = async () => {
      try {
        
        const response = await axios.get(`/reviews/`); 
        setReviews(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
     

      {reviews.map(review => (
        <div key={review._id}>
          
          
          <p>Review: {review.review}</p>
          <p>ID: {review._id}</p>
          <p>Rating: {review.rating}</p>
          <p>Reviewed By: {review.user && review.user.length > 0 && review.user[0].firstName}</p> 
          <p>Review for: {review.track && review.track.length > 0 && review.track[0].title}</p> 
        </div>
      ))} 
    </div>
  );
};

export default DisplayReviews;
