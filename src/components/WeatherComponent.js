import React from "react";
import styled from "styled-components";

const WeatherComponent = ({ weather }) => {
    return (
        <>
        <Container>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
            <WeatherContainer>
            <WeatherSummary>
                {`${Math.floor(weather?.main?.temp - 273)}°C`}
                {` | ${weather?.weather[0].description}`}
            </WeatherSummary>
            <Icon src={"https://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png"} />
            </WeatherContainer>
            

           <WeatherDetail>
            <div>Feels like <span>{`${Math.floor(weather?.main?.feels_like - 273)}°C`}</span></div>
            <div>Highs of <span>{`${Math.floor(weather?.main?.temp_max - 273)}°C`}</span></div>
            <div>Lows of {`${Math.floor(weather?.main?.temp_min - 273)}°C`}</div>
            <div>Wind speed <span>{`${weather?.wind?.speed} mph`}</span></div>
            <div>Humidity <span>{`${weather?.main?.humidity} %`}</span></div>
           </WeatherDetail> 
          </Container>
        </>
    );
};

const Container = styled.div`
background: #1F2124;
border-radius: 5px;
margin: -60px 20px 20px 20px;
padding: 20px;
text-align: center;
color: white;
` 
const Location = styled.span`
  margin: 0 auto;
  padding-top: 25px;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
`;
const WeatherSummary = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 20px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100%;
  margin: 5px auto;
`;
const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherDetail = styled.div`
  font-size: 18px;
  line-height: 1.3;
  & span {
    font-size: 20px;
  }
`

export default WeatherComponent;

