import { ResolveWeatherImage } from "../utils";

const weatherApiBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const weatherAPIKey = '73c7bcd0cbb3a3dac9a5f95a47b74022';

const getWeatherDataByPlaceName = async (placeName) => {
  const searchParams = {
    q: placeName,
    units: 'metric',
    appid: weatherAPIKey
  };

  const queryString = new URLSearchParams(searchParams).toString();

  try {
    const rawWeatherData = await fetch(`${weatherApiBaseUrl}?${queryString}`);
    const jsonWeatherData = await rawWeatherData.json();
    
    if(jsonWeatherData.cod !== 200) {
      return null;
    }

    return {
      image: ResolveWeatherImage(jsonWeatherData.weather[0].main),
      temperature: parseInt(jsonWeatherData.main.temp),
      description: jsonWeatherData.weather[0].description,
      humidity: jsonWeatherData.main.humidity,
      windSpeed: parseInt(jsonWeatherData.wind.speed)
    };
  } catch(error) {
    return null;
  }
}

export {
  getWeatherDataByPlaceName
};