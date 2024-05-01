import axios from 'axios';
import { useState } from 'react';
import { Container, CssBaseline, Box, TextField, Button } from '@mui/material';

function TrackImageUpload() {
    const [image, setImage] = useState({ preview: '', data: '' });
    const [trackId, setTrackId] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!trackId || !image.data) {
            setStatus('Please enter a valid track ID and select an image.');
            return;
        }
        
        let formData = new FormData();
        formData.append('file', image.data);

        try {
            const response = await axios.post(`/tracks/${trackId}/image`, formData);
            setStatus(`Upload successful:` (response.data.message));
        } catch (err) {
            setStatus(`Upload failed: ${ err.message}`);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const img = {
                preview: URL.createObjectURL(file),
                data: file,
            };
            setImage(img);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <h3>Upload Track Image</h3>
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
                    id="trackId"
                    label="Track ID"
                    name="trackId"
                    value={trackId}
                    onChange={(e) => setTrackId(e.target.value)}
                    autoFocus
                />
                {image.preview && <img src={image.preview} alt="Preview" style={{ margin: '10px 0' }} />}
                <input name="photo" type="file" onChange={handleFileChange} />

                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Submit</Button>
            </Box>
            
            <p>{status}</p>
        </Container>
    )

}

export default TrackImageUpload;
