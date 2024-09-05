
import image from './../assets/images/1.svg';
import './../styling/navbar.css'

import { useState } from "react";


function Navbar({timing}:any){
    
   
        return (
          <>
        <nav>
        <img src={image}  className='logo'/>
        <div className='column'>
        <h1>WeatherApp</h1>
        <div className='row'>
        <p className='current'>{timing}</p>
        </div>
        </div>

        <div className='options'>
        <div className='row'>
            <div className='op'> Today</div>
            <div className='op'> Tomorow</div>
            <div className='op'> After Tomorow</div>
        </div>
        <div className='line'></div>
        </div>

        </nav>
          </>
        );
      

}

export default Navbar