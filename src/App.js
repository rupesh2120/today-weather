import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import CityComponent from "./components/cityComponent/CityComponent";
import WeatherComponent from "./components/weatherInfoComponent/WeatherInfoComponent";

function App() {
	const [city, updateCity] = useState();
	const [weather, updateWeather] = useState();
	const fetchWeather = async (e) => {
		e.preventDefault();
		const response = await Axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6878e7f426d79a5c9c49feb95d1d5eba`
		);
		updateWeather(response.data);
	};
	return (
		<div className="container">
			<CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
			{city && weather ? (
				<WeatherComponent weather={weather} city={city} />
			) : (
				<h2 className="main">Type City Name to get weather information</h2>
			)}
		</div>
	);
}

export default App;
