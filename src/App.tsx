import { useState } from 'react'

import Card from './components/card'

import './styling/App.css'
import Navbar from './components/navbar'


import right from './assets/images/right.svg'
import left from './assets/images/left.svg'
import './styling/controler.css'

async function getData(location: string) {
  const url = ``; // use ur own aoi key get it from  : https://openweathermap.org/api and in the url add the location variable
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json
  } catch (error) {
    console.error(error);
  }
}

type CardData<T> = T[];

const date = new Date();

let day = date.getDate();
const dayIndex = date.getDay();
let month = date.getMonth() ;
let months =['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'] 
let days = ['sunday','monday','tuesday','wednsday','thursday','friday','saturday']

let time = date.getHours();
let min = date.getMinutes();
let timing = time+':'+min
let card_date = months[month]+' '+day +','+ days[dayIndex]



function App() {






  const [card_data, updater] = useState<CardData<any>>(['no data']);




  let [pos,updatepos]=useState(0)

  function slider(current:any){
    if(-2*1140 < pos && current < 0 || 2*1140 > pos && current > 0 ){
      Array.from(document.getElementsByClassName('grad')).forEach((element:Element) => {
        if (element instanceof HTMLElement) {
         
         
            element.style.transform = `translateX(${pos+current}px)`; 

          

       
        }
       
      });
        
      updatepos(pos+current)
    }
    else{
   
    }
    }
 

  
    const [inputValue, setInputValue] = useState('');

    function handleChange(event:any) {
      setInputValue(event.target.value);
    }
    function handleKeyPress(event:any){
      if (event.key === 'Enter') {
   
       
        getData(inputValue.trim())
          .then(data => { 
            setIsChecked(false)
           updater([data.name,data.main.temp,data.main.humidity,data.visibility,data.main.pressure,data.wind.speed,isChecked,card_date])
          
          })
         
       
      }
  
    }

    const [isChecked, setIsChecked] = useState(false)

    function change(){
      setIsChecked(!isChecked)
      const newData = [...card_data];
      newData[6]= !isChecked
      updater(newData)
    }




  return (
    <>

   <Navbar timing={timing}></Navbar>

   <div className='row'>
    <div className='controler'>
    °C
  <label className="switch">
  <input type="checkbox" checked={isChecked} onChange={change}></input>
  <span className="slider round"></span>
  </label>
   °F
    </div>
   
   </div>


    <div className='row'>
    <input className='in' placeholder='Search location' onKeyPress={handleKeyPress} onChange={handleChange}></input>
   </div>

    
   <div className='specialerow'>
    
    <Card weatherData={card_data}></Card>
  
  
   
    </div>
    <div className='slide'>
      <div onClick={()=> slider(-1140)
        }><img src={left} id='left'></img></div>
    
      <div onClick={()=> slider(+1140)
        }><img src={right} id='right'></img></div>
    </div>



    
    </>
  )
}

export default App
