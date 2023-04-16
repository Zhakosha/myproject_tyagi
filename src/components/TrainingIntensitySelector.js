import { useState } from 'react';

export default function TrainingIntensitySelector({ onIntensitySelected }) {
  const [selectedIntensity, setSelectedIntensity] = useState(null);

  const handleIntensityClick = (intensity) => {
    setSelectedIntensity(intensity);
    onIntensitySelected(intensity);
  };

  return (
    <div>
      <h2>Выберите интенсивность тренировок:</h2>
      <div>
        <button onClick={() => handleIntensityClick('low')}>Слабая</button>
        <button onClick={() => handleIntensityClick('medium')}>Средняя</button>
        <button onClick={() => handleIntensityClick('high')}>Высокая</button>
      </div>
    </div>
  );
}



