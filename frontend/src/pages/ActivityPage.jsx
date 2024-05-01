import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {  Grid,Typography,CircularProgress} from "@mui/material";
import MyAppBar from "../components/MyAppBar";
import TrackCard from "../components/TrackCard";

function ActivityPage(props) {
  const { name } = useParams();
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `/tracks/byType/${name}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data.data)) {
          setTracks(data.data);
        } else {
          setTracks([]);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [name]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Typography variant="body2" color="error">
        {error}
      </Typography>
    );
  }

  if (tracks.length === 0) {
    return <Typography variant="h6">No tracks found for {name}</Typography>;
  }

  return (
    <>
      <MyAppBar />
      <Typography
        variant="h5"
        component="div"
        style={{ padding: 20, margin: 20 }}
      >
        Awesome tracks for {name} walks ...
      </Typography>
      <Grid container spacing={3} style={{ padding: 20 }}>
        {tracks.map((track, index) => (
          <TrackCard key={index} track={track} />
        ))}
      </Grid>
     
    </>
  );
}

export default ActivityPage;
