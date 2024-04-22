import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/users/signup', formData);
            // Redirect to login page or show success message
        } catch (error) {
            console.error(error);
            // Handle error, e.g., show error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
            />

            <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
            />

            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <TextField
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            {/* Other fields (lastName, email, password) */}
            <Button type="submit" variant="contained" color="primary">
                Register
            </Button>
        </form>
    );
};

export default RegistrationForm;
