import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./components/cityComponent/CityComponent";
import WeatherComponent from "./components/weatherInfoComponent/WeatherInfoComponent";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 380px;
	padding: 20px 10px;
	margin: auto;
	border-radius: 4px;
	box-shadow: 0 3px 6px 0 #555;
	background: black;
	color: white;
	font-family: Montserrat;
`;

const AppLabel = styled.span`
	color: white;
	margin: 20px auto;
	font-size: 18px;
	font-weight: bold;
`;

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
		<Container>
			<AppLabel>React Weather App</AppLabel>
			{city && weather ? (
				<WeatherComponent weather={weather} city={city} />
			) : (
				<CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
			)}
		</Container>
	);
}

export default App;
