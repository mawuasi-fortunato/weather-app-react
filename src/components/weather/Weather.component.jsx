import React from "react";
import { GiWaterDrop, GiWindsock } from "react-icons/gi";

import './Weather.styles.css';

const Weather = ({
  image,
  temperature,
  description,
  humidity,
  windSpeed
}) => {
  return (
    <div className="app__weather">
      <div className="app__weather-image">
        <img src={image} alt="weather" />
        <h1>{temperature}°C</h1>
        <p>{description}</p>
      </div>
      <div className="app__weather-details">
        <div className="app__weather-details_info">
          <div className="app__weather-details_info-icon">
            <GiWaterDrop />
          </div>
          <div className="app__weather-details_info-data">
            <p>{humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="app__weather-details_info">
          <div className="app__weather-details_info-icon">
            <GiWindsock />
          </div>
          <div className="app__weather-details_info-data">
            <p>{windSpeed} Km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Weather;