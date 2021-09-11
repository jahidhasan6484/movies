import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Review from './Components/Review/Review';
import Military from './Components/Military/Military';
import ComingSoon from './Components/ComingSoon/ComingSoon';

function App() {
  return (
    <Router>
      <Header />
      <Review />
      <Military />
      <ComingSoon />
    </Router>
    
  );
}

export default App;
