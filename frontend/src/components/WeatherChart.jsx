import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const WeatherChart = ({ city }) => {
    const [chartData, setChartData] = useState({});

    const apiKey = "436c0534ff8a64f66e7aa7d10c43b902"; // apiKey inside 
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const { data } = await axios.get(url);
                const dateTime = data.list.map(item => item.dt_txt);
                const temperatures = data.list.map(item => item.main.temp - 273.15); // Convert Kelvin to Celsius

                setChartData({
                    labels: dateTime,
                    datasets: [
                        {
                            label: 'Temperature (°C)',
                            data: temperatures,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                        }
                    ]
                });
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [city, url]);

    return (
        <div>
            <h2>{city} Weather Forecast</h2>
            <Line data={chartData} />
        </div>
    );
};

export default WeatherChart;
