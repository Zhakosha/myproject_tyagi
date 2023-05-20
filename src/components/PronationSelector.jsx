import React, { useState } from 'react';
import './style.css'
import pronation from './images/pronation.jpeg'

export default function FootPronationSelector({ onFootPronationSelected }) {
  const [selectedPronation, setSelectedPronation] = useState(null);
  const [infoVisible, setInfoVisible] = useState(false);

  const handlePronationClick = (pronation) => {
    setSelectedPronation(pronation);
    onFootPronationSelected(pronation);
  };

  const handleInfoButtonClick = () => {
    setInfoVisible(!infoVisible);
  };

  return (
    <div className='wrapper'>
      <h2>Выберите тип пронации стопы:</h2>
      <div className='wrapper2'>
        <button className={`button ${selectedPronation === 'hypopronation' ? 'selected' : ''}`} onClick={() => handlePronationClick('hypopronation')}>Гипопронация</button>
        <button className={`button ${selectedPronation === 'normal' ? 'selected' : ''}`} onClick={() => handlePronationClick('normal')}>Нормальная</button>
        <button className={`button ${selectedPronation === 'hyperpronation' ? 'selected' : ''}`} onClick={() => handlePronationClick('hyperpronation')}>Гиперпронация</button>
      </div>
      <button className="infoButton" onClick={handleInfoButtonClick}>
        {infoVisible ? 'Скрыть информацию' : 'Что такое пронация?'}
      </button>
      {infoVisible && (
        <div className="infoText">
          <p className='info'>
            <span>Пронация стопы — универсальный механизм амортизации при передвижении человека. Обычно свод стопы человека выполняет роль природного амортизатора при касании с поверхностью: он становится более плоским, снижая ударную нагрузку. Это правильный, обычный вариант пронации, её называют «нейтральной».</span>
            <span>Также различают гиперпронацию и гипопронацию. При гиперпронации свод стопы заваливается во внутреннюю часть. Мышцы и связки стопы расслаблены, амортизация недостаточно хорошо работает. Избыточная пронация часто сопровождается плоскостопием и увеличением нагрузки на спину и колени.</span>
            <span>Третье положение стопы — это гипопронация (или супинация). Возникает из-за недостаточного прогиба стопы, которая сильно заваливается наружу, получая недостаточную амортизацию. Человек, что называется, "косолапит" при беге.</span>
            <span>Самый простой способ определить тип пронации — так называемый «мокрый тест», который выполняется в домашних условиях. Для этого нужно намочить стопу (или надеть мокрый носок) и оставить ею отпечаток на плотной бумаге. По получившемуся контуру можно будет оценить тип свода своей стопы.</span>
          </p>
          <img className='pronationImg' src= {pronation} alt="Изображение" />
        </div>
      )}
    </div>
  );
}
