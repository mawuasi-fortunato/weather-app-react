import React, { useState } from "react";

import './App.styles.css';

import {
  Footer,
  LocationNotFound,
  Search,
  Weather,
  Loading
} from "./components";
import { getWeatherDataByPlaceName } from "./services/weather.api";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [locationNotFound, setLocationNotFound] = useState(false);
  const [loadingLocationData, setLoadingLocationData] =useState(false);
  
  const handlePlaceWeatherData = async (placeName) => {
    if(!(!!placeName)) {
      return;
    }

    setLocationNotFound(false);
    setLoadingLocationData(true);

    const data = await getWeatherDataByPlaceName(placeName);

    setLoadingLocationData(false);

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
        {loadingLocationData
          ? <Loading />
          : <></>
        }
        {weatherData
          ? <Weather
              image={weatherData.image}
              temperature={weatherData.temperature}
              description={weatherData.description}
              humidity={weatherData.humidity}
              windSpeed={weatherData.windSpeed}
            />
          : <></>
        }
        {locationNotFound
          ? <LocationNotFound />
          : <></>
        }
      </div>
      <Footer />
    </div>
  );
};

export default App;