import React from "react";
import Weathericon from "./Weathericon";
export default function WeatherForecastDay(properties) {
  function maxtemperature() {
    let temperature = Math.round(properties.data.temp.max);
    return `${temperature}°`;
  }
  function mintemperature() {
    let temperature = Math.round(properties.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(properties.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="forescast-day">{day()}</div>

      <Weathericon code={properties.data.weather[0].icon} size="30" />
      <br />
      <div className="forecast-temperatures">
        <span className="forecast-temperature-max">{maxtemperature()}</span>
        <span className="forecast-temperature-min">{mintemperature()}</span>
      </div>
      {/** to display this code six times, for all the days, its better to use a react loop(map), loop through the data and display the forecast one at a time */}
    </div>
  );
}
