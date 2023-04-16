import React from 'react';
import './App.css';
import Header from './components/Header';
import GenderSelector from './components/GenderSelector';
import RunningSurfaceSelector from './components/RunningSurfaceSelector';
import TrainingIntensitySelector from './components/TrainingIntensitySelector';
import FootWidthSelector from './components/FootWidthSelector';
import PronationSelector from './components/PronationSelector';
import ShoeSelector from './components/ShoeSelector';

import Footer from './components/Footer';
import BmiCalculator from './components/BmiCalculator';


function App() {
  return (
    <div className="App">
      <Header/>
      <ShoeSelector/>
      <Footer/>
    </div>
  );
}

export default App;