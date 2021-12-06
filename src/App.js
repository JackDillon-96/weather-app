import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherInfoComponent";
import { createGlobalStyle } from 'styled-components';

export const WeatherIcons = {
  "01d": "/react-weather-app/icons/sunny.svg",
  "01n": "/react-weather-app/icons/night.svg",
  "02d": "/react-weather-app/icons/day.svg",
  "02n": "/react-weather-app/icons/cloudy-night.svg",
  "03d": "/react-weather-app/icons/cloudy.svg",
  "03n": "/react-weather-app/icons/cloudy.svg",
  "04d": "/react-weather-app/icons/perfect-day.svg",
  "04n": "/react-weather-app/icons/cloudy-night.svg",
  "09d": "/react-weather-app/icons/rain.svg",
  "09n": "/react-weather-app/icons/rain-night.svg",
  "10d": "/react-weather-app/icons/rain.svg",
  "10n": "/react-weather-app/icons/rain-night.svg",
  "11d": "/react-weather-app/icons/storm.svg",
  "11n": "/react-weather-app/icons/storm.svg",
};

const GlobalStyle = createGlobalStyle`
   body {
    background: #383A3F;
  }
`

const Title = styled.div`
  text-align: center;
  padding: 40px;
  color: #F6B352;
  font-size: 24px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: #1F2124;
  font-family: Montserrat;
`;


function App() {
  const [search, setSearch] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fe4feefa8543e06d4f3c66d92c61b69c`);
    setWeather(response.data);
    console.log(response.data)
  };

  return (
    <>
      <GlobalStyle />
      <Title>React Weather App</Title>
      <Container>
        <CityComponent setSearch={setSearch} fetchWeather={fetchWeather} />
        {search && weather ? 
          (<WeatherComponent weather={weather} search={search} />) : ("")
        }
      </Container>
    </>
  );
}

export default App;

