import { useState } from 'react';

export default function FootPronationSelector({ onFootPronationSelected }) {
  const [selectedPronation, setSelectedPronation] = useState(null);

  const handlePronationClick = (pronation) => {
    setSelectedPronation(pronation);
    onFootPronationSelected(pronation);
  };

  return (
    <div>
      <h2>Выберите тип пронации стопы:</h2>
      <div>
        <button onClick={() => handlePronationClick('hypopronation')}>Гипопронация</button>
        <button onClick={() => handlePronationClick('normal')}>Нормальная</button>
        <button onClick={() => handlePronationClick('hyperpronation')}>Гиперпронация</button>
      </div>
    </div>
  );
}
