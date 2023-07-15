import React, { useState } from "react";
import "./Weather.css";
import Weatherinfo from "./Weatherinfo";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function Weather(properties) {
  const [city, setCity] = useState(" ");
  const [result, setResult] = useState(false);
  const [weatherobj, setWeatherobj] = useState({});
  function displayWeather(response) {
    setResult(true);
    setWeatherobj({
      coord: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "be81f193e065bf5feb2d944c7336968b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    // this function gives access to the citys
    //make an api call and update the weather UI
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type here"
        onChange={updateCity}
      ></input>
      <button type="submit">Search</button>
    </form>
  );

  if (result === true) {
    return (
      <div>
        {form}
        <h1 className="city">{city} </h1>

        <Weatherinfo info={weatherobj} />
        <WeatherForecast coordinates={weatherobj.coord} />
      </div>
    );
  } else {
    return form;
  }
}
