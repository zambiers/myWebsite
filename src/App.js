import React from 'react';
import './App.css';
import Accessibility from './compents/Accessibility';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './compents/Layout';

// My files
import FrontPage from './page1';
import ReadingsPage from './page2';
import PlantPage from './page3';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<FrontPage />} />
          <Route path="/page1" element={<ReadingsPage />} />
          <Route path="/page2" element={<Accessibility />} />
          <Route path="/page3" element={<PlantPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
