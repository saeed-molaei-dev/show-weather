/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";

export default async function WeatherApi(props) {
  const requestId = "8726defc18cdec3441ce32c8a82bc195";
  console.log(props.cityName.cityNameValue);
  console.log(props.weatherData);

  props.cityName.cityNameValue.length > 3 &&
    (await axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          props.cityName.cityNameValue +
          "&appid=" +
          requestId,
      )
      .then((response) => {
        console.log(response.data.main.humidity);
        props.setResponseData((data) => {
          return {
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure.toString(),
            temp_min: response.data.main.tempMin.toString(),
          };
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally((axiosFinally) => {
        console.log("axiosFinally");
      }));
}
