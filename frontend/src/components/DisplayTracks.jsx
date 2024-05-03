import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get(`/tracks/`); 
        setTracks(response.data.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchTracks();
  }, []);

  const deleteTracks = async (trackId) => {
    try {
      await axios.delete(`/tracks/${trackId}`);
      setTracks(tracks.filter(track=> track._id !== trackId));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <div>
      {tracks.map(track=> (
        <div key={track._id}>
          <p>Track Name: {track.title}</p>
          <p>Track ID: {track._id}</p>
          <button onClick={() => deleteTracks(track._id)}>Delete</button> {/* Delete button */}
        </div>
      ))}
    </div>
  );
};

export default DisplayTracks;

