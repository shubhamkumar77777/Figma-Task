import React, { useState } from 'react';
import './Button.css'; 

const Button = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="button-container" style={{display:"flex",marginInline:"13px"}}>
      {['1 Day', '7 Days', '30 Days', '1 Year', '5 Year'].map((buttonName, index) => (
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

export default Button;
