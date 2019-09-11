import React, { Component } from 'react';

class About extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""			
		}
	}

	componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		fetch(url).then( resp => {
			return resp.json()
		}).then( resp2 => {
			// console.log(resp2)
			this.setState({
				temp: resp2.main.temp,
				temp_min: resp2.main.temp_min,
				temp_max: resp2.main.temp_max,
				desc: resp2.weather[0].description
			}
			// , ()=>console.log(this.state)
			)
		})
		// 	, (weatherData) =>{
		// 	console.log(weatherData);
		// 	this.setState({

		// 	})
		// });
	}

	render(){
		return(
			<div className='weather-container'>
				<h1>Weather</h1>
				<h3>Temp: {this.state.temp}</h3>
				<h3>High: {this.state.temp_max}</h3>
				<h3>Low: {this.state.temp_min}</h3>
				<h3>Forecast: {this.state.desc}</h3>

			</div>
		);
	}
}

export default About;
