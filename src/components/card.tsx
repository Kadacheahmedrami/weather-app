import { useState } from "react";
import "./../styling/card.css"
import location from '../assets/images/location.png'
import temp from '../assets/images/temp.svg'
import weth from '../assets/images/Group 44.svg'


function Card({ weatherData }:any){
    

if(weatherData[0] === 'no data')
  {
return  <div className="grad-black"></div>
  }
else
  
   
    {    return (
          
          <>
          <div className="grad">
         
            <div className="row"><img className="im" src={location}></img>{weatherData[0] }</div>
         
          <div className="center">
           
              <img src={temp} className="centerim"></img>
             { !weatherData[6]? <div> {(weatherData[1]-273.15).toFixed(2)} °C</div> : <div> {((weatherData[1]-273.15)*(9/5)+32).toFixed(2)} °F</div>}
              <img src={weth}></img>
            </div>
            <div className="row">
             {weatherData[7]}
            </div>

            <div className="cardbutt">
                <div>
                  Humidity <div id="hum">{weatherData[2] }%</div>
                </div>
                <div>
                  Visibility <div id="vis">{weatherData[3] }km</div>
                </div>
                <div>
                  Airpressure <div id="press">{weatherData[4] }hpa</div>
                </div>
                <div>
                  Wind <div id="wind">{weatherData[5] }mph</div>
                </div>
            </div>
          </div>
        
          </>
        );
      }

}

export default Card