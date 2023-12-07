import React, { useState } from 'react';

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div style={{paddingBottom:"10px"}}>
     
      
      <button  style={{fontSize:"11px",fontWeight:"650",border:"none",backgroundColor:"white",textAlign:"center",marginLeft:"125px",width:"100px",paddingBottom:"20px"}}onClick={toggleDropdown}>
        {showDropdown ? 'Hide Details' : 'Show Details'}
        <span>{showDropdown ? '-' : '+'}</span>
      </button>
      {showDropdown && (
        <div>
             <div className="navbar">
        <div style={{ marginLeft:'15px',fontSize:"10px",fontWeight:"700" }}>APY</div>
        <div style={{ marginRight:"15px",fontSize:"10px",fontWeight:"900", color: "rgb(255 180 17)" }}>63.34%</div>
      </div>    
         <ul>
        <li style={{fontSize:"10px",fontWeight:"500",marginInline:"15px"}}>Calculated based on current rates</li>
        <li style={{fontSize:"10px",fontWeight:"500",marginInline:"15px"}}>All figures are estimates provided for your convenience only and by no means represent guaranteed returns.</li>
      </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
