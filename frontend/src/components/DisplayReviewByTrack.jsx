import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayReviewByTrack = ({ trackId ,trackName}) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    
    const fetchReviews = async () => {
      try {
        
        const response = await axios.get(`/reviews/track/${trackId}`); 
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
      <h2>Reviews for {trackName}</h2>

      {reviews.map(review => (
        <div key={review._id}>
          
          
          <p>Review: {review.review}</p>
          <p>Rating: {review.rating}</p>
          <p>Reviewed By: {review.user && review.user.length > 0 && review.user[0].firstName}</p> 
        </div>
      ))} 
    </div>
  );
};

export default DisplayReviewByTrack;
