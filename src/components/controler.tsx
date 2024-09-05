import { useState } from "react";
import '../styling/controler.css'
function Controler(){
    
  const [isChecked, setIsChecked] = useState(false)

  function change(){
    setIsChecked(!isChecked)
  }
        return (
          <>
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
          </>
        );
      

}

export default Controler