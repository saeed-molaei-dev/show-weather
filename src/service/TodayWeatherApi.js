import axios from "axios";

export default function TodayWeatherApi(cityName) {
  const requestId = "8726defc18cdec3441ce32c8a82bc195";
  return axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      requestId,
  );
}
