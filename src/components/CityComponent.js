import styled from "styled-components";
import React from "react";

const CityComponent = ({ setSearch, fetchWeather }) => {
  return (
    <>
    <Container>
      <SearchTitle>Search for a city</SearchTitle>
      <Input onSubmit={fetchWeather}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <button type={"submit"}>Search</button>
      </Input>
    </Container>
    </>
  );
};

const Container = styled.div`
background: #1F2124;
border-radius: 5px;
margin: 50px 20px 20px 20px;
padding: 20px;
text-align: center;
color: white;
` 
const Input = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 5px;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
    border-radius: 5px;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;
const SearchTitle = styled.span`
  color: white;
  margin: 10px auto;
  font-size: 20px;
  
`;

export default CityComponent;