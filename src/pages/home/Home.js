import "./Home.scss";
import React, { useState } from "react";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

function Home() {
  const [selectedCity, setselectedCity] = useState("ss");
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
  return (
    <div className="home">
      <header className="home__header">
        <div>Best Weather Web Application In The World</div>
      </header>
      <div className="home__main">
        <div className="home__selected-city">
          <select
            name="city-name"
            id="city-name"
            value={selectedCity}
            onChange={(cityName) => {
              setselectedCity(cityName.target.value);
              console.log(selectedCity);
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
            <div className="home__weather-item">
              <span className="home__weather-title">weather :</span>
              <span className="home__weather-value">Good</span>
            </div>
            <div className="home__weather-item">
              <span className="home__weather-title">weather :</span>
              <span className="home__weather-value">Good</span>
            </div>
            <div className="home__weather-item">
              <span className="home__weather-title">weather :</span>
              <span className="home__weather-value">Good</span>
            </div>
            <div className="home__weather-item">
              <span className="home__weather-title">weather :</span>
              <span className="home__weather-value">Good</span>
            </div>
          </div>
          <h2>four days later :</h2>
          <div className="home__weather-info-four-days-later"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
