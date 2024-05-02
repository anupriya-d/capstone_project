import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayReviewsByUser = ({ userId, userName }) => {
  const [reviews, setReviews] = useState([]);
  const [updatedReview, setUpdatedReview] = useState('');
  const [updatedRating, setUpdatedRating] = useState('');
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/reviews/user/${userId}`);
        setReviews(response.data.data);
      } catch (error) {
        setError('Error fetching reviews');
      }
    };

    fetchReviews();
  }, [userId]);

  const handleDeleteReview = async (reviewId) => {
    try {
      await axios.delete(`/reviews/${reviewId}`);
      setReviews(reviews.filter(review => review._id !== reviewId));
    } catch (error) {
      setError('Error deleting review');
    }
  };

  const handleUpdateReview = async (reviewId) => {
    try {
      await axios.put(`/reviews/${reviewId}`, { review: updatedReview, rating: updatedRating });
      const response = await axios.get(`/reviews/user/${userId}`);
      setReviews(response.data.data);
      setUpdatedReview('');
      setUpdatedRating('');
      setSelectedReviewId(null);
    } catch (error) {
      setError('Error updating review');
    }
  };

  return (
    <div>
      <h4>Reviews Given By You</h4>
      {error && <p>{error}</p>}
      {reviews.length === 0 && <p>No reviews found.</p>}
      {reviews.map(review => (
        <div key={review._id}>
          <p>Review: {review.review}</p>
          <p>Rating: {review.rating}</p>
          <p>Review For: {review.track && review.track.length > 0 && review.track[0].title}</p>
          <button onClick={() => handleDeleteReview(review._id)}>Delete</button>
          {selectedReviewId === review._id ? (
            <div>
              <textarea
                value={updatedReview}
                onChange={(e) => setUpdatedReview(e.target.value)}
                placeholder="Update review"
              />
              <input
                type="number"
                value={updatedRating}
                onChange={(e) => setUpdatedRating(e.target.value)}
                placeholder="Update rating"
              />
              <button onClick={() => handleUpdateReview(review._id)}>Save</button>
            </div>
          ) : (
            <button onClick={() => setSelectedReviewId(review._id)}>Update</button>
          )}
          <br />
        </div>
      ))}
    </div>
  );
};

export default DisplayReviewsByUser;
