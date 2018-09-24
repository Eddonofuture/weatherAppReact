import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location'
import WeatherData from './WeatherData';
import CircularProgress from 'material-ui/CircularProgress';
import transfomrWeather from '../../services/transformWeather';

import './styles.css';

const url = "http://api.openweathermap.org/data/2.5/weather";
const api_key = "a9fe215ffcef0f7769961d8b56a870e6";

class WeatherLocation extends Component {
    constructor({ city }) {
        super();
        this.state = {
            city,
            data: null,
        };
    }

    handleUpdateCLick = () => {
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
        fetch(api_weather).then(data => {
            return data.json()
        }).then(weather_data => {
            const data = transfomrWeather(weather_data);
            this.setState({ data });
        });
        /*this.setState({
            data : data2
        });*/
    }

    componentWillMount() {
        this.handleUpdateCLick();
    }

    componentDidMount() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }
    render = () => {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={60} thickness={7} />}
                <button onClick={this.handleUpdateCLick}>Actualizar</button>
            </div>
        );
    }
}

WeatherLocation.PropTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;