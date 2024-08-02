import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { useContext } from "react";
import { ContextTemperatureUnitContext } from "../../context/ContextTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const weatherOption = weatherOptions.find((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const { currentTemperatureUnit } = useContext(ContextTemperatureUnitContext);

  return (
    <section className="weather-card">
      <p className="weather-card__temperature">
        {`${weatherData.temp[currentTemperatureUnit]}°${currentTemperatureUnit}`}
      </p>
      <img
        src={weatherOption?.url}
        alt={weatherOption?.condition}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
