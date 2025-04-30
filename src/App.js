import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './compents/Layout';

// My files
import FrontPage from './page1';
import ReadingsPage from './page2';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<FrontPage />} />
          <Route path="/page1" element={<ReadingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
