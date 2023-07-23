import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import Weathericon from "./Weathericon";
import WeatherTemperature from "./WeatherTemperature";
export default function Weatherinfo(properties) {
  return (
    <div className="Weatherinfo">
      <FormattedDate date={properties.info.date} />
      <ul>
        <li className="temperature">
          <WeatherTemperature
            celsius={properties.info.temperature}
            className="child"
          />
          <Weathericon code={properties.info.icon} size={properties.size} />
        </li>

        <li className="description"> {properties.info.description}</li>
        <li className="wind">Wind: {properties.info.wind} km</li>
        <li className="humidity">Humidity: {properties.info.humidity}% </li>
      </ul>
    </div>
  );
}
