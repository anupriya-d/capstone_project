import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Grid, Alert } from '@mui/material';
import { useUserContext } from '../context/UserContext'; 

export default function ReviewForm({ trackId,trackTitle }) {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    const [alert, setAlert] = useState({ show: false, message: '', severity: 'info' });

    const { currentUser } = useUserContext(); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!currentUser) {
            setAlert({
                show: true,
                message: 'Please log in to submit a review.',
                severity: 'warning'
            });
            return;
        }

        try {
            const response = await axios.post('/reviews/create', {
                user: currentUser._id,
                track: trackId,
                review,
                rating
            });
            console.log('Review submitted:', response.data);
            setAlert({
                show: true,
                message: `Review submitted successfully. Thanks ${currentUser.firstName}!`,
                severity: 'success'
            });
        } catch (error) {
            console.error('Failed to submit review:', error);
            setAlert({ show: true, message: 'Failed to submit review', severity: 'error' });
        }
    };
    if(!currentUser.token) return null;

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} md={3}>
                <Box
                    component="form"
                    sx={{
                        margin: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onSubmit={handleSubmit}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h6">Submit a Track Review for {trackTitle}</Typography>
                    <TextField
                        sx={{ margin: '10px' }}
                        label="Review"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        value={review}
                        required
                        onChange={e => setReview(e.target.value)}
                    />
                    <TextField
                        sx={{ margin: '10px' }}
                        label="Rating"
                        variant="outlined"
                        fullWidth
                        value={rating}
                        required
                        onChange={e => setRating(e.target.value)}
                    />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary"
                        disabled={!currentUser} // Disable the button if no user is logged in
                        sx={{backgroundColor:'gray'}}
                    >
                        Submit Review
                    </Button>
                    {alert.show && (
                        <Alert severity={alert.severity} onClose={() => setAlert({ ...alert, show: false })}>
                            {alert.message}
                        </Alert>
                    )}
                </Box>
            </Grid>
        </Grid>
    );
}
