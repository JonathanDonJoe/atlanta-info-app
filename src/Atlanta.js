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
			console.log(resp2)
			this.setState({
				temp: resp2.main.temp,
				temp_min: resp2.main.temp_min,
				temp_max: resp2.main.temp_max,
				desc: resp2.weather[0].description
			}, ()=>console.log(this.state))
		})
		// 	, (weatherData) =>{
		// 	console.log(weatherData);
		// 	this.setState({

		// 	})
		// });
	}

	render(){
		return(
			<div>
				<h1>Temp: {this.state.temp}</h1>
				<h1>High: {this.state.temp_max}</h1>
				<h1>Low: {this.state.temp_min}</h1>
				<h1>Forecast: {this.state.desc}</h1>

			</div>
		);
	}
}

export default About;
