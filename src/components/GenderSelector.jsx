import React from 'react';
import { useState } from 'react';
import male from './images/male1.png';
import female from './images/female1.png';
import './style.css'


function GenderSelector ({ onGenderSelected }) {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
    onGenderSelected(gender);
  };


  return (
    <div className='wrapper1'>
      <h2 class='title'>Выберите свой пол:</h2>
      <div className='genderImg' >
        <img className='img'
          src= {male}
          alt="Мужской пол"
          onClick={() => handleGenderClick('male')}
          style={{ cursor: 'pointer', border: selectedGender === 'male' ? '2px solid blue' : 'none' }}
        />
        
        <img className='img'
          src={female}
          alt="Женский пол"
          onClick={() => handleGenderClick('female')}
          style={{ cursor: 'pointer', border: selectedGender === 'female' ? '2px solid blue' : 'none' }}
        />
      </div>
    </div>
  );
}
export default GenderSelector;
