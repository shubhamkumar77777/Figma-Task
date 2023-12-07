import React, { useState } from 'react';
import './Button3.css'; 

const Button3 = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="button-container" style={{display:"flex",marginInline:"15px"}}>
      {[ 'Tier 1', 'Tier 2','Tier 3','Tier 4','Tier 5'].map((buttonName, index) => (
        <button
          key={index}
          className={`custom-button ${activeButton === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default Button3;
