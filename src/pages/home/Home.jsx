import "./Home.scss";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import { TbLetterG, TbTemperatureCelsius } from "react-icons/tb";
import { SiCloudways } from "react-icons/si";
import forecastFourDayApi from "../../service/ForecastFourDayApi";
import { CITIES_DATA } from "../../consts/cities.const.";
import { WEATHERS_STATES_DATA } from "../../consts/homePage.const";
import currentWeatherDataApi from "../../service/CurrentWeatherDataApi";

function Home() {
  const [selectedCity, setselectedCity] = useState("");
  const [currentWeatherData, setCurrentWeatherData] =
    useState(WEATHERS_STATES_DATA);
  const [forecastFourDay, setForecastFourDay] = useState(WEATHERS_STATES_DATA);

  function handleCityChange(cityName) {
    setselectedCity(cityName);
    currentWeatherDataApi(cityName).then((response) => {
      setCurrentWeatherData({
        windSpeed: response.data.wind.speed.toString(),
        pressure: response.data.main.pressure.toString(),
        tempMin: (response.data.main.temp_min.toString() - 273.15).toFixed(1),
      });
    });
    forecastFourDayApi(cityName).then((response) => {
      setForecastFourDay({
        windSpeed: response.data.list[32].wind.speed.toString(),
        pressure: response.data.list[32].main.pressure.toString(),
        tempMin: (
          response.data.list[32].main.temp_min.toString() - 273.15
        ).toFixed(1),
      });
    });
  }

  return (
    <>
      <Header />
      <div className="home">
        <select
          name="city-name"
          id="city-name"
          className="home__selected-city"
          value={selectedCity}
          onChange={(cityName) => {
            handleCityChange(cityName.target.value);
          }}
        >
          {CITIES_DATA.map((item, index) => {
            if (index === 0) {
              return (
                <option disabled value={item.value} key={item.value}>
                  {item.text}
                </option>
              );
            } else {
              return (
                <option value={item.value} key={item.value}>
                  {item.text}
                </option>
              );
            }
          })}
        </select>
        <p>امروز :</p>
        <div className="home__items-holder">
          <ItemDetail
            itemTitle={"سرعت باد"}
            itemValue={currentWeatherData.windSpeed}
            itemIcon={<SiCloudways />}
          />
          <ItemDetail
            itemTitle={"فشار هوا"}
            itemValue={currentWeatherData.pressure}
            itemIcon={<TbLetterG />}
          />
          <ItemDetail
            itemTitle={"کمترین دما"}
            itemValue={currentWeatherData.tempMin}
            itemIcon={<TbTemperatureCelsius />}
          />
        </div>
        <p>چهار روز بعد :</p>
        <div className="home__items-holder">
          <ItemDetail
            itemTitle={"سرعت باد"}
            itemValue={forecastFourDay.windSpeed}
            itemIcon={<SiCloudways />}
          />
          <ItemDetail
            itemTitle={"فشار هوا"}
            itemValue={forecastFourDay.pressure}
            itemIcon={<TbLetterG />}
          />
          <ItemDetail
            itemTitle={"کمترین دما"}
            itemValue={forecastFourDay.tempMin}
            itemIcon={<TbTemperatureCelsius />}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
