import React from 'react';
import './Result.css';

const Result = props=> {

    const {date, city, sunrise, sunset, temp, pressure, wind, err} = props.weather;

    let content = null;
    
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
    
    if(!err && city){
        content =(
            <>
            <h3>Search results for the City: <em>{city}</em></h3>
            <h4>Data for the day and time: {date}</h4>
            <h4>Temperature: {temp} &#178;C</h4>
            <h4>Sunrise today: {sunriseTime}</h4>
            <h4>Sunset today: {sunsetTime}</h4>
            <h4>Actual pressure: {pressure} hPa</h4>
            <h4>Actual wind speed: {wind} m/s</h4>
            </>
        )
    }

    return ( 
        <div className="result">
        {/* {err ? `We do not have ${city} in our database` : content} */}
        {err ? <>We do not have <b>{city}</b> in our database</> : content}
        </div>
     );
}
 
export default Result;