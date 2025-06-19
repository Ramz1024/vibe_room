import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import Signup from './Signup';
import HappyRoom from './HappyRoom';
import AngryRoom from './AngryRoom';
import SleepingRoom from './SleepingRoom';
import ChillRoom from './ChillRoom';
import SadRoom from './SadRoom';
import StudyingRoom from './StudyingRoom';
import PartyRoom from './PartyRoom';
import MelancholyRoom from './MelancholyRoom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/happy" element={<HappyRoom />} />
        <Route path="/angry" element={<AngryRoom />} />
        <Route path="/sleeping" element={<SleepingRoom />} />
        <Route path="/chill" element={<ChillRoom />} />
        <Route path="/sad" element={<SadRoom />} />
        <Route path="/studying" element={<StudyingRoom />} />
        <Route path="/party" element={<PartyRoom />} />
        <Route path="/melancholy" element={<MelancholyRoom />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
