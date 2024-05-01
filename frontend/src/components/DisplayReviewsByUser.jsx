import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayReviewsByUser = ({ userId ,userName}) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    
    const fetchReviews = async () => {
      try {
        
        const response = await axios.get(`/reviews/user/${userId}`); 
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
      <h4>Reviews Given By You</h4>

      {reviews.map(review => (
        <div key={review._id}>
          
          
          <p>Review: {review.review}</p>
          <p>Rating: {review.rating}</p>
          <p>Review For: {review.track && review.track.length > 0 && review.track[0].title}</p> 
          <br />
        </div>
      ))} 
    </div>
  );
};

export default DisplayReviewsByUser;