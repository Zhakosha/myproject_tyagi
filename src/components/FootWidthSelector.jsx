import { useState } from 'react';

function FootWidthSelector({ onFootWidthSelected }) {
  const [selectedWidth, setSelectedWidth] = useState(null);

  const handleWidthClick = (width) => {
    setSelectedWidth(width);
    onFootWidthSelected(width);
  };

  return (
    <div>
      <h2>Выберите ширину стопы:</h2>
      <div>
        <button onClick={() => handleWidthClick('narrow')}>Узкая</button>
        <button onClick={() => handleWidthClick('normal')}>Нормальная</button>
        <button onClick={() => handleWidthClick('wide')}>Широкая</button>
      </div>
    </div>
  );
}

export default FootWidthSelector;