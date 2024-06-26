import React, { useState } from 'react';
import axios from 'axios';
import { Button, Box, Typography, Grid, Alert } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useUserContext } from '../context/UserContext';
import moment from 'moment';

function BookingForm({ trackId,trackTitle }) {
    const [bookingDate, setBookingDate] = useState(null);
    const [alert, setAlert] = useState({ show: false, message: '', severity: 'info' });

    const { currentUser } = useUserContext();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (bookingDate) {
            // Calculate the date 3 days from now
            const threeDaysFromNow = new Date();
            threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);
        
            // Convert bookingDate to a Date object
            const selectedDate = new Date(bookingDate);
        
            // Check if the selected date is at least 3 days ahead of the current date
            if (selectedDate >= threeDaysFromNow) {
                try {
                    const response = await axios.post('/bookings/create', {
                        user: currentUser._id,
                        track: trackId,
                        bookingDate: moment(bookingDate).format('YYYY-MM-DD')
                    });
                    console.log('Booking submitted:', response.data);
                    setAlert({
                        show: true,
                        message: `Booking submitted successfully. Thanks, ${currentUser.firstName}!`,
                        severity: 'success'
                    });
                } catch (error) {
                    console.error('Failed to submit booking:', error);
                    setAlert({ show: true, message: 'Failed to submit booking', severity: 'error' });
                }
            } else {
                
                setAlert({ show: true, message: 'Please select a date atleast 3days From now.', severity: 'warning' });
            }
        } else {
            setAlert({ show: true, message: 'Please select a date before submitting.', severity: 'warning' });
        }};

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
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
                    <Typography variant="h6">Submit a Track Booking for {trackTitle}</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Booking Date"
                            value={bookingDate}
                            onChange={setBookingDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 , backgroundColor:'#BEBEBE'}}>
                        Submit Booking
                    </Button>
                    {alert.show && (
                        <Alert severity={alert.severity} sx={{ width: '100%', mt: 2 }} onClose={() => setAlert({ ...alert, show: false })}>
                            {alert.message}
                        </Alert>
                    )}
                </Box>
            </Grid>
        </Grid>
    );
}

export default BookingForm;
