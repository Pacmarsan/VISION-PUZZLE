import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { AncientPathSelection } from './components/AncientPathSelection';
import { ExplorersDesk } from './components/ExplorersDesk';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/expedition" element={<AncientPathSelection />} />
        <Route path="/analysis" element={<ExplorersDesk />} />
      </Routes>
    </BrowserRouter>
  );
}