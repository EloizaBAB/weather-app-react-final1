import React from "react";
import "./Weather.css";

export default function FormattedDate(properties) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[properties.date.getDay()];
  let hours = properties.date.getHours();
  let minutes = properties.date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="date">
      {day}, {hours}h:{minutes}min
    </div>
  );
}
