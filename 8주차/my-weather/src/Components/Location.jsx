import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
const API_KEY = "93e43892f980adca5b58dd3d8c28434e";

const Box = styled.div`
  margin-top: 5vh;
  height: 20vh;
  padding: 10px;
  border: 3px solid gray;
  border-radius: 10px;
`
const Input = styled.input`
  width: 15vw;
  height: 3vh;
  margin-top: 30vh;
  padding: 10px;
  border-width: 3px;
  border-radius: 15px;
  font-size: 20px;
  border-color: black;
`

const Name = styled.p`
  font-size: 25px;
`
const Temp = styled.p`
  font-size: 50px;
`
const Weather = styled.p`
  float: right;
  font-size: 20px
`
export default function Location(props) {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const searchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
      setWeatherData(response.data); 
      console.log(response);
    } catch(error) {
      console.error('에러 발생', error);
    }
  };
  
  const keyHandler = event => {
    if (event.key === 'Enter') {
      searchWeather();
    }
  };

  return (
    <div>
      <Input type='text' placeholder='도시를 입력하세요' value={location} onChange={(e) => setLocation(e.target.value)}
        onKeyDown={keyHandler}
      />
      {weatherData && (
        <Box>
          <Name>{weatherData.name}</Name>
          <Temp>{Math.round(weatherData.main.temp-273.15)}°C</Temp>
          <Weather>{weatherData.weather[0].main}</Weather>
        </Box>
      )}
    </div>
  );
};
