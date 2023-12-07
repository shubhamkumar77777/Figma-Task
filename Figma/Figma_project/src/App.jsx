import React from 'react'
import "./App.css"
import Button from "./Button"
import Button2 from "./Button2"
import Button3 from './Button3'
import Switch from './Switch'
import { IoMdClose } from "react-icons/io";
import cake1 from "./assets/cake.png"
import Dropdown from './DropDown'
import { useState } from 'react'




const App = () => {

 
    const [inputValue, setInputValue] = useState([])

    const handleInput =(e)=>{
      e.preventDefault()
      setInputValue(e.target.value); 
      console.log(inputValue);
       }
    

  return (
    // MainConatainer
    <div style={{ backgroundColor: "lightgray", height: "100vh", paddingLeft: "550px", paddingTop: "50px" }}>

      {/* divforinnerBox   */}
      <div className='bg-white shadow-lg rounded-4' style={{ height: "auto", width: "340px", borderRadius: "10px", marginBottom: "10px" }}>
        {/* MainDiv1 */}
        <div >
          {/* divforheader */}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "15px", height: "40px" }}>
            <h5>Roi Calculator</h5>
            <IoMdClose />
          </div>
          {/* divforheaderclosed */}

          {/* divforCakeSwitchandUSD */}
          <div className="right" style={{ display: "flex", justifyContent: "right", alignItems: "right", paddingRight: "15px", paddingBottom: "10px", height: "20px" }}>
            <img style={{ height: "15px" }} src={cake1} />
            <p style={{ fontSize: "10px", fontWeight: "700", color: "gray", marginLeft: "3px" }} >Cake</p>
            <Switch />
            <p style={{ fontSize: "10px", fontWeight: "700", color: "gray", marginLeft: "3px" }} >USD</p>
          </div>

          {/* divforCakeSwitchandUSD */}

          {/* divforinputfield */}
          <div className='input'
               onChange={handleInput}>
                
               
            <input type="text" style={{ width: "100%", height: "40px", borderRadius: "10px", border: "none", outline: "none", fontWeight: "700",textAlign:"right",padding:"2px" }} placeholder="2.10000 CAKE" className='input__placeholder' />

          </div>


          <Button2 />


          {/* Timeframe */}



          <h3 style={{ fontSize: "12px", fontWeight: "600", marginLeft: "15px", marginTop: "10px" }}>Timeframe</h3>

          <Button />


          {/* Timeframeclosed */}
          <div style={{display:"flex"}}>
          <h3 style={{ fontSize: "12px", fontWeight: "600", marginLeft: "15px", marginTop: "10px" }}>  Enable Accelerated APY</h3>
          
          </div>

          {/* ForSelecttier */}
          <h4 style={{ marginLeft: "16px", marginTop: "5px", fontSize: "11px", paddingTop: "5px", fontWeight: "500", color: "rgb(80,80,80)" }}>Select Tier</h4>
          <Button3 />

          {/* InputField2 */}
          <p style={{ textAlign: "right", fontWeight: "700", fontSize: "9px", marginRight: "19px", marginTop: "1px", color: "gray", marginBottom: "2px" }}>  Roi at Current Rates</p>

          <div className='input2' >
            <input type="text" style={{ width: "100%", height: "40px", borderRadius: "10px", outline:" none",border:"none", fontWeight: "700",textAlign:"right",padding:"2px" }} placeholder="100.0 USD" className='input__placeholder2' />
          </div>

          <p style={{ textAlign: "right", fontWeight: "600", fontSize: "9px", marginRight: "19px", color: "gray", height: "10px", marginBottom: "2px" }}>  ~ 3CAKE + 10 DON</p>

          <button style={{ margin: "15px", border: "0.1", borderRadius: "10px", width: "140px", height: "30px", color: "white", backgroundColor: "black", border: "none", fontWeight: "400", fontSize: "12px" }}>Apply</button>
          <button style={{ margin: "10px", border: "0.1", borderRadius: "10px", width: "140px", fontWeight: "400", fontSize: "12px", border: "none", height: "30px" }}>Cancel</button>
          {/* DivforButton */}

          <Dropdown />
          
          <div>

          </div>

        </div>


      </div>
      {/* divforinnerBox   */}



    </div>
    // MainConatainerclosed
  )
}

export default App