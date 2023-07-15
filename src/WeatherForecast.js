import React from "react";
import "./Weather.css";
import Weathericon from "./Weathericon";
import axios from "axios";
export default function WeatherForecast(response) {
  console.log(response);
  function handleResponse() {}
  const apiKey = "be81f193e065bf5feb2d944c7336968b";
  let longitude = 40;
  let latitude = 29;
  let onecallapi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(onecallapi).then(handleResponse);
  return (
    <div className="weatherforecast">
      <div>
        <div className="forescast-day">day</div>

        <Weathericon code="01d" size="30" />
        <br />
        <div className="forecast-temperatures">
          <span className="forecast-temperature-max">20</span>
          <span className="forecast-temperature-min">10</span>
        </div>
        {/** to display this code six times, for all the days, its better to use a react loop(map), loop through the data and display the forecast one at a time */}
      </div>
    </div>
  );
}
