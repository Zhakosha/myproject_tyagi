import React from 'react';
import { useState } from 'react';
import './style.css';

function FootWidthSelector({ onFootWidthSelected }) {
  const [selectedWidth, setSelectedWidth] = useState(null);

  const handleWidthClick = (width) => {
    setSelectedWidth(width);
    onFootWidthSelected(width);
  };

  return (
    <div className='wrapper'>
      <h2>Выберите ширину стопы:</h2>
      <div className='wrapper2'>
        <button className={`button ${selectedWidth === 'normal' ? 'selected' : ''}`} onClick={() => handleWidthClick('normal')}>Нормальная</button>
        <button className={`button ${selectedWidth === 'wide' ? 'selected' : ''}`} onClick={() => handleWidthClick('wide')}>Широкая</button>
      </div>
    </div>
  );
}

export default FootWidthSelector;