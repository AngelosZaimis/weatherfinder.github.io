import {React, useState} from "react";

import App from "./App";




export function SearchBar(props) {





  const [city, setCity] = useState('');



  const handleCityChange = (newCity) => {


    setCity(newCity.target.value);

  }
  
  
  const handleSubmit = (event) => {
    event.preventDefault();


    const newCity = {
      
      city: city

    }

    if (city.length > 0) {
      
      props.changeCity(newCity);

    }

  }

  return (

       <div className="searchbar">
        <form onSubmit={handleSubmit}>
          <input
          type='text'
          value={city}
          onChange={handleCityChange}

          
          >
          </input>
        </form>
       </div>
    )
}