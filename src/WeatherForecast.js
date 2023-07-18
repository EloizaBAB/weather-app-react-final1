import React, { useState } from "react";
import "./Weather.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
export default function WeatherForecast(properties) {
  let [loadedforecast, setloadedforecast] = useState(false);
  let [forecast, setforecast] = useState(null);
  function handleResponse(response) {
    setforecast(response.data.daily);
    setloadedforecast(true);
  }

  if (loadedforecast) {
    console.log(forecast);
    return (
      <div className="weatherforecast">
        <div className="dailyforecast">
          {" "}
          {forecast.map(function (dailyforecast, index) {
            if (index < 6) {
              return (
                <div className="dailyindex" key={index}>
                  <WeatherForecastDay data={dailyforecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "be81f193e065bf5feb2d944c7336968b";
    let latitude = properties.coordinates.lat;
    let longitude = properties.coordinates.lon;
    let onecallapi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(onecallapi).then(handleResponse);
    return null;
  }
}
