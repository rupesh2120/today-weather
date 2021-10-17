import "./CityComponent.css";
import React from "react";

const CityComponent = (props) => {
	const { updateCity, fetchWeather } = props;
	return (
		<div className="CityComponent">
			<p className="applabel">React Weather App</p>
			<p className="citylabel">Find Weather of your city</p>
			<div className="formclass">
				<form onSubmit={fetchWeather}>
					<input
						onChange={(e) => updateCity(e.target.value)}
						placeholder="City"
					/>
					<button type={"submit"}>Search</button>
				</form>
			</div>
		</div>
	);
};
export default CityComponent;
