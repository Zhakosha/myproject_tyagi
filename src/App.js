import React from 'react';
import './App.css';
import Header from './components/Header';
import ShoeSelector from './components/ShoeSelector';
import Footer from './components/Footer';



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