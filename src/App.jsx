import React from 'react';
import './App.css';
import Home from'./pages/Index'
import {BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  return (
  <Router>
    <Home/>
  </Router>
  )
}

export default App;
