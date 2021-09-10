import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import ComingSoon from './Components/ComingSoon/ComingSoon';

function App() {
  return (
    <Router>
      <Header />
      <ComingSoon />
    </Router>
    
  );
}

export default App;
