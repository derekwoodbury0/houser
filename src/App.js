import React from 'react';
import './App.css';
import {HashRouter as Router } from 'react-router-dom'
import routes from './routes'
import Header from './Components/Header/Header.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {routes}
      </div>
    </Router>
  );
}

export default App;
