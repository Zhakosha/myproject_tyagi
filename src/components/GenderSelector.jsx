import { useState } from 'react';
import male from './images/male.jpeg';
import female from './images/female.jpeg';


function GenderSelector ({ onGenderSelected }) {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
    onGenderSelected(gender);
  };


  return (
    <div>
      <h2>Выберите свой пол:</h2>
      <div>
        <img
          src= {male}
          alt="Мужской пол"
          onClick={() => handleGenderClick('male')}
          style={{ cursor: 'pointer' }}
        />
        <img
          src={female}
          alt="Женский пол"
          onClick={() => handleGenderClick('female')}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}
export default GenderSelector;
