import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './Homepage';  // Ensure this path is correct
import StylePage from './StylePage'; // Ensure this path is correct


function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/style" element={<StylePage />} />
      </Routes>
  );
}


export default App;