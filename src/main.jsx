import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import Signup from './signup';
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
    <App />
  </React.StrictMode>,
);
