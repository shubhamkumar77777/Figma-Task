import React, { useState } from 'react';
import './Switch.css'; 

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`switch-container ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
      <div className="toggle-circle"></div>
    </div>
  );
};

export default Switch;
