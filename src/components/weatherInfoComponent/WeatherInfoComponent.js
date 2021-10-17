import React from "react";
import "./WeatherInfoComponent.css";

const WeatherInfoComponent = (props) => {
	const { name, value } = props;
	return (
		<div className="InfoContainer">
			{/* <InfoIcon src={WeatherInfoIcons[name]} /> */}
			<div className="InfoLabel">
				{value}
				<span>{name}</span>
			</div>
		</div>
	);
};
const WeatherComponent = (props) => {
	const { weather } = props;
	const isDay = weather?.weather[0].icon?.includes("d");
	const getTime = (timeStamp) => {
		return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
			timeStamp * 1000
		).getMinutes()}`;
	};
	return (
		<div className="WeatherContainer">
			<div>
				<div className="Condition">
					<span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
					{`  |  ${weather?.weather[0].description}`}
				</div>
				{/* <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]} /> */}
			</div>
			<div className="Location">{`${weather?.name}, ${weather?.sys?.country}`}</div>

			<p className="WeatherInfoLabel">Weather Info</p>
			<div className="WeatherInfoContainer">
				<WeatherInfoComponent
					name={isDay ? "sunset" : "sunrise"}
					value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
				/>
				<WeatherInfoComponent
					name={"humidity"}
					value={weather?.main?.humidity}
				/>
				<WeatherInfoComponent name={"wind"} value={weather?.wind?.speed} />
				<WeatherInfoComponent
					name={"pressure"}
					value={weather?.main?.pressure}
				/>
			</div>
		</div>
	);
};

export default WeatherComponent;
