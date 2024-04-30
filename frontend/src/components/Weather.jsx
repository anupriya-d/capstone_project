import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

function Weather({cityId}) {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const city = cityId;
                const apiKey = '436c0534ff8a64f66e7aa7d10c43b902';
                const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
                const response = await axios.get(apiUrl);
                setWeatherData(response.data.list);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

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

    return (
        <div>
            <Typography variant="h6"> Weather Summery for Next Few Days</Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {weatherData.map((item, index) => (
                    <Card key={index} style={{ width: 200, margin: 10 }}>
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
