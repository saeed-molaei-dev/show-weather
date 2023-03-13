import "./Home.scss";
import React, { useState } from "react";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import WeatherApi from "../../service/WeatherApi";
import Header from "../../components/header/Header";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import { TbSunFilled, TbLetterG, TbTemperatureMinus } from "react-icons/tb";

function Home() {
  const [selectedCity, setselectedCity] = useState("");
  const [responseData, setResponseData] = useState({
    humidity: "--:--",
    pressure: "0",
    tempMin: "0",
  });
  const cityData = [
    {
      text: "انتخاب کنید",
      value: "",
    },
    {
      text: "تهران",
      value: "Tehran",
    },
    {
      text: "بابل",
      value: "Babol",
    },
    {
      text: "لندن",
      value: "London",
    },
  ];
  const itemTitelData = [
    {
      title: "طلوع خورشید:",
      value: responseData.humidity,
      altIcon: <TbSunFilled />,
    },
    {
      title: "فشار هوا:",
      value: responseData.pressure,
      altIcon: <TbLetterG />,
    },
    {
      title: "کمترین دما:",
      value: responseData.tempMin,
      altIcon: <TbTemperatureMinus />,
    },
  ];

  return (
    <div className="home">
      <Header />
      <div className="home__main">
        <div className="home__selected-city">
          <select
            name="city-name"
            id="city-name"
            value={selectedCity}
            onChange={(cityName) => {
              const cityNameValue = cityName.target.value;
              setselectedCity(cityNameValue);
              WeatherApi({
                cityName: { cityNameValue },
                weatherData: { setResponseData },
              });
            }}
          >
            {cityData.map((item) => {
              return (
                <option value={item.value} key={item.value}>
                  {item.text}
                </option>
              );
            })}
          </select>
        </div>
        <div className="home__weather-info-wrapper">
          <h2>Today :</h2>
          <div className="home__weather-info-today">
            {itemTitelData.map((item, index) => {
              console.log("rerender items");
              console.log(responseData);
              return (
                <ItemDetail
                  key={index}
                  itemTitle={item.title}
                  itemValue={item.value}
                  itemIcon={item.altIcon}
                />
              );
            })}
          </div>
          <h2>four days later :</h2>
          <div className="home__weather-info-four-days-later">
            {itemTitelData.map((item, index) => {
              return (
                <ItemDetail
                  key={index}
                  itemTitle={item.title}
                  itemValue={item.value}
                  itemIcon={item.altIcon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
