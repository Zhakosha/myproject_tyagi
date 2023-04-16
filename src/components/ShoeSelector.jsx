import { useState } from 'react';
import GenderSelector from './GenderSelector';
import FootWidthSelector from './FootWidthSelector';
import PronationSelector from './PronationSelector';
import RunningSurfaceSelector from './RunningSurfaceSelector';
import TrainingIntensitySelector from './TrainingIntensitySelector';
import BmiCalculator from './BmiCalculator';

export default function ShoeSelector() {
  const [gender, setGender] = useState(null);
  const [footWidth, setFootWidth] = useState(null);
  const [footPronation, setFootPronation] = useState(null);
  const [runningSurface, setRunningSurface] = useState(null);
  const [trainingIntensity, setTrainingIntensity] = useState(null);

  const handleGenderSelected = (gender) => {
    setGender(gender);
  };

  const handleFootWidthSelected = (width) => {
    setFootWidth(width);
  };

  const handleFootPronationSelected = (pronation) => {
    setFootPronation(pronation);
  };

  const handleRunningSurfaceSelected = (surface) => {
    setRunningSurface(surface);
  };

  const handleTrainingIntensitySelected = (intensity) => {
    setTrainingIntensity(intensity);
  };

  return (
    <div>
      <h1>Подбор кроссовок</h1>
      <GenderSelector onGenderSelected={handleGenderSelected} />
      {gender && (
        <>
          <FootWidthSelector onFootWidthSelected={handleFootWidthSelected} />
          <PronationSelector
            onFootPronationSelected={handleFootPronationSelected}
          />
          <RunningSurfaceSelector
            onSurfaceSelected={handleRunningSurfaceSelected}
          />
          <TrainingIntensitySelector
            onIntensitySelected={handleTrainingIntensitySelected}
          />
          <BmiCalculator gender={gender} />
          <h2>Выбранные параметры:</h2>
          <ul>
            <li>Пол: {gender}</li>
            <li>Ширина стопы: {footWidth}</li>
            <li>Тип пронации: {footPronation}</li>
            <li>Поверхность бега: {runningSurface}</li>
            <li>Интенсивность тренировок: {trainingIntensity}</li>
          </ul>
        </>
      )}
    </div>
  );
}

