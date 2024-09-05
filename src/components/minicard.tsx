import { useState } from "react";
import '../styling/minicard.css'
import weth from '../assets/images/Group 44.svg'
function MiniCard(){
    
   
        return (
          <>
          <div className="mini">
            <div id="time">19 pm</div>
            <img className="weth" src={weth}></img>
            <div id="temp">29°</div>
          </div>
          </>
        );
      

}

export default MiniCard