import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import SearchComponent from "./components/SearchComponent";
import WeatherComponent from "./components/WeatherComponent.js";
import { createGlobalStyle } from 'styled-components';

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
        <SearchComponent setSearch={setSearch} fetchWeather={fetchWeather} />
        {search && weather ? 
          (<WeatherComponent weather={weather} />) : ("")
        }
      </Container>
    </>
  );
}

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

export default App;

