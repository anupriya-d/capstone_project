import React, { useState } from 'react';
import { TextField, Button } from  '@mui/material';

const LoginForm = () => {
    const [formData, setFormData] = useState({
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
            const response = await axios.post('/users/login', formData);
            // Save token in localStorage or session storage
            console.log(response.data.token);
            // Redirect to dashboard or show success message
        } catch (error) {
            console.error(error);
            // Handle error, e.g., show error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Login
            </Button>
        </form>
    );
};

export default LoginForm;
