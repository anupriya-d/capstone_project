import axios from 'axios';
import { useState } from 'react';
import { Container, CssBaseline, Box, TextField, Button } from '@mui/material';

function DeleteReview() {
    
    const [reviewId, setReviewId] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!reviewId) {
            setStatus('Please enter a valid Review ID.');
            return;
        }
        try {
            const response = await axios.delete(`/reviews/${reviewId}`);
            setStatus(`Deletion successful: ${response.data.data}`);
        } catch (err) {
            setStatus(`Deletion failed: ${err.message}`);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <h3>Delete Review</h3>
            <Box component="form" onSubmit={handleSubmit} noValidate
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="reviewId"
                    label="Review ID"
                    name="reviewId"
                    value={reviewId}
                    onChange={(e) => setReviewId(e.target.value)}
                    autoFocus
                />
              

                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Submit</Button>
            </Box>
            
            <p>{status}</p>
        </Container>
    )

}

export default DeleteReview;
