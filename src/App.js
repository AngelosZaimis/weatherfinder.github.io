import './App.css';
import ForecastTemplate from './ForecastTemplate';
import { SearchBar } from './SearchBar';
import { CountryInfo } from './CountryInfo';
import {React, useState, useEffect} from 'react'
import { getIcon } from './ExportIcons';
import useLocalStorage from 'use-local-storage';




function App() {
  


  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
   
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  }

  const [img, setImg] = useState(require('./img/sunny(2).png'))

  const switchIcon = () => {
    const newIcon = img === require('./img/sunny(2).png') ? require('./img/moon.png') : require('./img/sunny(2).png');
    setImg(newIcon);
  }
  
  const changeCity = (newCity) => { // change the city we display on the screen
    setCity(newCity)
    
  }
  const [city, setCity] = useState({ // change the city for the searchbar
    city: 'zurich'
  });
  const [name, setName] = useState('') // change and display the new name of the country
  const [icon, setIcon] = useState(''); // change and display the icon
  const [temperature, setTemperature] = useState(''); // change tempetature
  const [description, setDescription] = useState(''); // change weather description
  const [sys, setSys] = useState(''); // change country alpha-2 code
  const [forecasts, setForecasts] = useState([]);
  


  const fetchForecast = async () => {  // we get forecast weather data from the api
    const num = 7
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city.city}&cnt=${num}&units=metric&appid=f3f69eb154e5270fe509093c2d049bfd`)
    const foreCastData = await response.json();
    setForecasts(foreCastData.list);
    console.log(foreCastData.list)

  }

   

  const fetchData = async() => {   //we get current weather data from the api

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&units=metric&appid=d101e2dfeab0a6356b0f581e80588073`);   
    const weatherData = await response.json();
  
    setName(weatherData.name);
    setIcon(weatherData.weather[0].icon)
    setTemperature(weatherData.main.temp)
    setDescription(weatherData.weather[0].description)
    setSys(weatherData.sys.country)


  }



  useEffect(() => {
    fetchData();
  }, [city])

  useEffect(() => {
    fetchForecast();

  }, [city])


  let isLoading = name === '' ? true : false ;


  return (
    <div className="App" data-theme={theme}>
      <div className='toggler' onClick={switchTheme}>
        <img src={img} onClick={switchIcon}></img>
      </div>
      
     {!isLoading 
      ? (
       <div>
        <SearchBar className='searchbar' changeCity={changeCity} ></SearchBar>
        <CountryInfo className='country_info' name={name} temperature={temperature} description={description} sys={sys} src={getIcon(icon)} ></CountryInfo>

       {forecasts?.length > 0 
        ? (
        
        <div className='forecast_container'>
          {forecasts.map((forecast, i = 0) => (
           <ForecastTemplate className='forecast_container' key={i + 1} forecast={forecast}  />
           ))}
        </div>
       ) 
      : (
       <div className='empty'>
         
       </div>
     )
    } 

      </div>
    ): (
      <div className='empty_div'>
        <img src={require('./img/loader1.gif')}/>
      </div>
    )}
  </div>
  );
}

export default App;
