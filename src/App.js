import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import { useState } from 'react';
import Mouse from './components/Mouse/Mouse';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/mouse" element={<Mouse />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
