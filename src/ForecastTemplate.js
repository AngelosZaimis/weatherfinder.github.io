import React, { useEffect, useState } from 'react'
import { getIcon } from './ExportIcons';
import {PropTypes} from 'prop-types';


function ForecastTemplate({forecast}) {


 

  return (

    <div className='forecast_container'>
      <span><img src={getIcon(forecast.weather[0].icon)}/></span>
      <span><p>{forecast.weather[0].main}</p></span>
      <span><h2>{`${Math.round(forecast.temp.day)} °C`}</h2></span>

    </div>
  )
}

export default ForecastTemplate



ForecastTemplate.prototype = {

  forecast: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired
  })

}