import {
  Snow,
  Mist,
  Rain,
  Clear,
  Cloud
} from "../assets/images";

const ResolveWeatherImage = (weatherCondition) => {
  switch (weatherCondition) {
    case 'Clear':
      return Clear;
    case 'Clouds':
      return Cloud;
    case 'Mist':
      return Mist;
    case 'Rain':
      return Rain;
    case 'Snow':
      return Snow;
    default:
      return ''
  }
}

export default ResolveWeatherImage;