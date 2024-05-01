import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

function Weather({ cityId }) {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const apiKey = '436c0534ff8a64f66e7aa7d10c43b902';
                const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityId}&appid=${apiKey}&units=metric`;
                const response = await axios.get(apiUrl);
                setWeatherData(response.data.list);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [cityId]);

    const formatDate = (dtTxt) => {
        const date = new Date(dtTxt);
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    };

    const weatherEmoji = (weather) => {
        switch (weather) {
            case 'Clear':
                return '☀️';
            case 'Clouds':
                return '☁️';
            case 'Rain':
                return '🌧️';
            case 'Thunderstorm':
                return '⛈️';
            case 'Drizzle':
                return '🌦️';
            case 'Snow':
                return '❄️';
            default:
                return '❓';
        }
    };

    const filterWeatherAtNoon = () => {
        const weatherAtNoon = [];
        
        weatherData.forEach(item => {
            const date = new Date(item.dt_txt);
            if (date.getHours() === 12) {
                weatherAtNoon.push(item);
            }
        });
        
        return weatherAtNoon;
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h6" style={{ marginBottom: '20px' }}>Weather Summary at 12 Noon for Next Few Days</Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {filterWeatherAtNoon().map((item, index) => (
                    <Card key={index} style={{ width: 200, margin: 10,color:'white',background: 'linear-gradient(to bottom, #5C258D, #4389A2)' }}>
                        <CardContent>
                            <Typography variant="h6" component="div">{formatDate(item.dt_txt)}</Typography>
                            <Typography variant="body1" component="div">{weatherEmoji(item.weather[0].main)} {item.weather[0].description}</Typography>
                            <Typography variant="body2" component="div">{item.main.temp} °C</Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Weather;

