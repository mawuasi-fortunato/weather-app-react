import React, { useReducer } from "react";

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
  const [weatherData, dispatch] = useReducer(weatherDataReducer, initialWeather);
  
  const handlePlaceWeatherData = async (placeName) => {
    if(!(!!placeName)) {
      return;
    }

    dispatch({
      type: 'search_location',
      payload: null
    });

    await searchLocationWeather(placeName, dispatch);
  }

  return (
    <div className="app">
      <div className="app__container">
        <Search
          onSearchPlace={handlePlaceWeatherData}
        />
        {weatherData.searchingLocation
          ? <Loading />
          : <></>
        }
        {weatherData.data
          ? <Weather
              image={weatherData.data.image}
              temperature={weatherData.data.temperature}
              description={weatherData.data.description}
              humidity={weatherData.data.humidity}
              windSpeed={weatherData.data.windSpeed}
            />
          : <></>
        }
        {weatherData.locationNotFound
          ? <LocationNotFound />
          : <></>
        }
      </div>
      <Footer />
    </div>
  );
};

async function searchLocationWeather(locationName, dispatch) {
  const data = await getWeatherDataByPlaceName(locationName);

  if(!data) {
    return dispatch({
      type: 'not_found_location',
      payload: null
    });
  }

  return dispatch({
    type: 'found_location',
    payload: data
  });
}

function weatherDataReducer(state, action) {
  const newState = {...state};

  switch(action.type) {
    case 'search_location': {
      return {
        ...newState,
        data: null,
        locationNotFound: false,
        searchingLocation: true
      }
    }
    case 'found_location': {
      return {
        ...newState,
        data: action.payload,
        locationNotFound: false,
        searchingLocation: false
      }
    }
    case 'not_found_location': {
      return {
        ...newState,
        data: action.payload,
        locationNotFound: true,
        searchingLocation: false
      }
    }    
    default: {
      throw Error('Unknown action: ', action.type);
    }
  }
}

const initialWeather = {
  data: null,
  locationNotFound: false,
  searchingLocation: false
};

export default App;