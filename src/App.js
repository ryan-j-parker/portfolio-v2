import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import { useState } from 'react';
import Mouse from './components/Mouse/Mouse';
import { Routes, Route } from 'react-router-dom';
import { Scene } from 'three';
import Experience from './components/Experience/Experience';
import AltScene from './components/Experience/AltScene';

function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/scene" element={<Experience />} />
          <Route path="/alt" element={<AltScene />} />
          <Route path="/mouse" element={<Mouse />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
