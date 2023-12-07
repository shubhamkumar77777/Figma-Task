import React, { useState } from 'react';
import './Button2.css'; 

const Button2 = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="button-container" style={{display:"flex",marginInline:"15px"}}>
      {['USE BALENCE', '$1000', '$100'].map((buttonName, index) => (
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

export default Button2;
