import React, { useState } from "react";
import {PropTypes} from 'prop-types'





export function CountryInfo(props){




    return (

        <div className="country_info">
            <div className='name_container'>
               <h1>{props.name}</h1>
               
               <p>{props.sys}</p>
            </div>
            <img src={props.src}/>

            <p className="paragraf">{props.description}</p>

           <div className="Temperature_info">
              <h2>{Math.round(props.temperature)}</h2>
              <p>°C</p>
           </div>

           
        </div>
    )
}




CountryInfo.prototype = {

    name: PropTypes.string.isRequired,
    sys: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired
}