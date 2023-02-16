import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HeroSection from './components/hero/HeroSection.js';
import Header from './components/header/Header.js';
import SearchField from './components/searchSection/SearchField.js';
import PollutionData from './components/pollutionDataPage/PollutionData.js';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Routes>
        <Route exact path="/" element={<SearchField />} />
        <Route exact path="/country/:id" element={<SearchField />} />
        <Route path="/pollution/:id" element={<PollutionData />} />
      </Routes>
    </div>
  );
}

export default App;
