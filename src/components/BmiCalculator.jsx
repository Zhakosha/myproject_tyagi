import { useState } from 'react';

export default function BmiCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const calculateBmi = () => {
    if (!weight || !height) {
      alert('Введите вес и рост');
      return;
    }
    const bmi = weight / ((height / 100) ** 2);
    setBmi(bmi.toFixed(2));
    localStorage.setItem('bmi', bmi.toFixed(2));
  };

  return (
    <div>
      <h2>Введите свой вес и рост:</h2>
      <div>
        <label>Вес (кг):</label>
        <input type="number" value={weight} onChange={handleWeightChange} />
      </div>
      <div>
        <label>Рост (см):</label>
        <input type="number" value={height} onChange={handleHeightChange} />
      </div>
      <div>
        <button onClick={calculateBmi}>Рассчитать ИМТ</button>
      </div>
      {bmi && <p>Ваш ИМТ: {bmi}</p>}
    </div>
  );
}
