import React, { useState } from "react";

import './App.styles.css';

import { Footer, LocationNotFound, Search, Weather } from "./components";
import { getWeatherDataByPlaceName } from "./services/weather.api";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [locationNotFound, setLocationNotFound] = useState(false);
  
  const handlePlaceWeatherData = async (placeName) => {
    if(!(!!placeName)) {
      return;
    }

    setLocationNotFound(false);

    const data = await getWeatherDataByPlaceName(placeName);
        
    if(!data) {
      setWeatherData(null);
      setLocationNotFound(true);
    } else {
      setWeatherData(data);
    }
  }

  return (
    <div className="app">
      <div className="app__container">
        <Search
          onSearchPlace={handlePlaceWeatherData}
        />
        {weatherData ?
          <Weather
            image={weatherData.image}
            temperature={weatherData.temperature}
            description={weatherData.description}
            humidity={weatherData.humidity}
            windSpeed={weatherData.windSpeed}
          />
          : <></>}
        {locationNotFound ?
          <LocationNotFound />
          : <></>}
      </div>
      <Footer />
    </div>
  );
};

export default App;