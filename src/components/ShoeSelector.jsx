import React from 'react';
import { useState, useEffect } from 'react';
import GenderSelector from './GenderSelector';
import FootWidthSelector from './FootWidthSelector';
import PronationSelector from './PronationSelector';
import BmiCalculator from './BmiCalculator';
import './style.css';

export default function ShoeSelector() {
  const [gender, setGender] = useState(localStorage.getItem('gender') || null);
  const [footWidth, setFootWidth] = useState(localStorage.getItem('footWidth') || null);
  const [footPronation, setFootPronation] = useState(localStorage.getItem('footPronation') || null);
  const [shoeModel, setShoeModel] = useState('');
  const [bmi, setBmi] = useState(localStorage.getItem('bmi') || null);

const handleBmiSelected = (bmi) => {
  setBmi(bmi);
};

const handleGenderSelected = (selectedGender) => {
setGender(selectedGender);
localStorage.setItem('gender', selectedGender);
};

const handleFootWidthSelected = (selectedWidth) => {
setFootWidth(selectedWidth);
localStorage.setItem('footWidth', selectedWidth);
};

const handleFootPronationSelected = (selectedPronation) => {
setFootPronation(selectedPronation);
localStorage.setItem('footPronation', selectedPronation);
};


useEffect(() => {
localStorage.setItem('gender', gender);
}, [gender]);

useEffect(() => {
localStorage.setItem('footWidth', footWidth);
}, [footWidth]);

useEffect(() => {
localStorage.setItem('footPronation', footPronation);
}, [footPronation]);


const selectShoeModel = () => {
  let model = '';
  let image = '';

  if (
    gender === 'male' &&
    footWidth === 'normal' &&
    bmi < 25) {
      if (footPronation === 'normal' || footPronation === 'hypopronation' ) {
        model = 'Asics DYNOBLAST 3'; image = require ('./model1.webp');
      }

      else {
        model = 'Asics GEL KAYANO 29'; image = require ('./model2.webp');
      }
      
      }
    else if 
      (gender === 'male' &&
      footWidth === 'normal') {
        if (footPronation === 'normal' || footPronation === 'hypopronation' ) {
          model = 'Asics  GEL CUMULUS 25'; image = require ('./model3.webp');
        }
        else {
          model = 'Asics MetaRun'; image = require ('./model4.webp');
        }
      }
    
    else if (
        gender === 'male' &&
        footWidth === 'wide') {
          if (footPronation === 'normal' || footPronation === 'hypopronation' ) {
            model = 'Saucony GUIDE 16 wide'; image = require ('./model5.jpeg');
          }
          
          else {
            model = 'Saucony HURRICANE 23 wide' ; image = require ('./model6.jpeg');
          }
          
        } 
    else if (
      gender === 'female' &&
      footWidth === 'normal' &&
      bmi < 25) {
        if (footPronation === 'normal' || footPronation === 'hypopronation' ) {
           image = require ('./model1.webp'); image = require ('./model7.webp');
        }
        
        else {
          model = 'Asics GT 2000 11'; image = require ('./model8.webp');
        }
        
      }
      else if 
      (gender === 'female' &&
      footWidth === 'normal') {
        if (footPronation === 'normal' || footPronation === 'hypopronation' ) {
          model = 'Asics  GEL CUMULUS 25'; image = require ('./model9.webp');
        }
        
        else {
          model = 'Asics MetaRun'; image = require ('./model10.webp');
        }
        
      } 
    else if (
        gender === 'female' &&
        footWidth === 'wide'
      ) { if (footPronation === 'normal' || footPronation === 'hypopronation' ){
        model = 'Reebok Floatride Energy 4 Adventure'; image = require ('./model11.jpeg');
      }
        
       else {
        model = 'Hoka Gaviota 3'; image = require ('./model12.jpeg');
       }
        
       }
  return {model, image};
};

const selectedModel = selectShoeModel();

return (
<div>
  <div className='wrapper'>
     <h1>Подбор беговых кроссовок для начинающих</h1>
     <p className='notes'> кроссовки подбираются из расчета средней инстенсивности тренировок 3-4 раза в неделю</p>
     <p> отметив подходящие параметры, ты узнаешь рекомендуемую модель кроссовок</p>
  </div>
<GenderSelector onGenderSelected={handleGenderSelected} />
{gender && (
<>
<FootWidthSelector onFootWidthSelected={handleFootWidthSelected} />
<PronationSelector
         onFootPronationSelected={handleFootPronationSelected}
       />

<BmiCalculator gender={gender} onBmiSelected={handleBmiSelected}/>

<div className='wrapper'>
      <h2>Рекомендуемая модель: {selectedModel.model}</h2>
      <img src={selectedModel.image} alt="" />

  {/* <h2>Выбранные параметры:</h2>
  <ul className='list'>
    <li>Пол: {gender}</li>
    <li>Ширина стопы: {footWidth}</li>
    <li>Тип пронации: {footPronation}</li>
  </ul> */}
</div>
</>
)}
</div>
);
}
