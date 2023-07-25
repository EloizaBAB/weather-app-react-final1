import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(properties) {
  const [unit, setunit] = useState("celsius");
  function convertToCelsius(event) {
    event.preventDefault();
    setunit("celsius");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setunit("Fahrenheit");
  }
  if (unit === "celsius") {
    return (
      <>
        <span className="temperature">{Math.round(properties.celsius)}</span>
        <span className="celsius">°C | </span>
        <a
          href="/"
          onClick={convertToFahrenheit}
          className="fahrenheit"
          rel="noopener noreferrer"
        >
          F°
        </a>
      </>
    );
  } else {
    let fahrenheit = (properties.celsius * 9) / 5 + 32;
    return (
      <>
        <span>{Math.round(fahrenheit)}</span>{" "}
        <a
          href="/"
          onClick={convertToCelsius}
          className="celsius"
          rel="noopener noreferrer"
        >
          °C |
        </a>
        <span className="fahrenheit">F°</span>
      </>
    );
  }
}
