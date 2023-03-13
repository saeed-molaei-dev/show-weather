import "./Home.scss";
import React, { useState } from "react";
import TodayWeatherApi from "../../service/TodayWeatherApi";
import Header from "../../components/header/Header";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import { TbSunFilled, TbLetterG, TbTemperatureMinus } from "react-icons/tb";
import axios from "axios";
import FourDaysLaterWeatherApi from "../../service/FourDaysLaterWeatherApi";

function Home() {
  const [selectedCity, setselectedCity] = useState("");
  const [responseTodayData, setResponseTodayData] = useState({
    humidity: "--:--",
    pressure: 0,
    tempMin: 0,
  });
  const [response4DaysLaterData, setResponse4DaysLaterData] = useState({
    humidity: "--:--",
    pressure: 0,
    tempMin: 0,
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
  const item4DaysLaterTitelData = [
    {
      title: "طلوع خورشید:",
      value: response4DaysLaterData.humidity,
      altIcon: <TbSunFilled />,
    },
    {
      title: "فشار هوا:",
      value: response4DaysLaterData.pressure,
      altIcon: <TbLetterG />,
    },
    {
      title: "کمترین دما:",
      value: response4DaysLaterData.tempMin,
      altIcon: <TbTemperatureMinus />,
    },
  ];
  const itemTodayTitelData = [
    {
      title: "طلوع خورشید:",
      value: responseTodayData.humidity,
      altIcon: <TbSunFilled />,
    },
    {
      title: "فشار هوا:",
      value: responseTodayData.pressure,
      altIcon: <TbLetterG />,
    },
    {
      title: "کمترین دما:",
      value: responseTodayData.tempMin,
      altIcon: <TbTemperatureMinus />,
    },
  ];

  function CallTodayApi(cityNameValue) {
    cityNameValue !== ""
      ? TodayWeatherApi(cityNameValue).then((response) => {
          setResponseTodayData({
            humidity: response.data.main.humidity.toString(),
            pressure: response.data.main.pressure.toString(),
            tempMin: response.data.main.temp_min.toString(),
          });
        })
      : setResponseTodayData({
          humidity: "--:--",
          pressure: 0,
          tempMin: 0,
        });
  }
  function Call4DaysLaterApi(cityNameValue) {
    cityNameValue !== ""
      ? FourDaysLaterWeatherApi(cityNameValue).then((response) => {
        setResponse4DaysLaterData({
            humidity: response.data.main.humidity.toString(),
            pressure: response.data.main.pressure.toString(),
            tempMin: response.data.main.temp_min.toString(),
          });
        })
      : setResponse4DaysLaterData({
          humidity: "--:--",
          pressure: 0,
          tempMin: 0,
        });
  }
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
              CallTodayApi(cityNameValue);
              Call4DaysLaterApi(cityNameValue);
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
          <h2>امروز :</h2>
          <div className="home__weather-info-today">
            {itemTodayTitelData.map((item, index) => {
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
          <h2>چهار روز بعد :</h2>
          <div className="home__weather-info-four-days-later">
            {item4DaysLaterTitelData.map((item, index) => {
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
