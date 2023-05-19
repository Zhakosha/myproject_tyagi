import { useState } from 'react';
import './style.css';


export default function BmiCalculator({ gender, onBmiSelected }) {
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
    const bmiValue = weight / ((height / 100) ** 2);
      setBmi(bmiValue.toFixed(2));
      localStorage.setItem('bmi', bmiValue.toFixed(2));
      onBmiSelected(bmiValue.toFixed(2));
  };

  return (
    <div className='wrapper'>
      <h2>Введите свой вес и рост:</h2>
      <div>
        <label>Вес (кг):</label>
        <input className='form' type="number" value={weight} onChange={handleWeightChange} />
      </div>
      <div>
        <label>Рост (см):</label>
        <input className='form' type="number" value={height} onChange={handleHeightChange} />
      </div>
      <div>
        <button className='button' onClick={calculateBmi}>Рассчитать ИМТ</button>
      </div>
      {bmi && <p>Ваш ИМТ: {bmi}</p>}
    </div>
  );
}
