import React from 'react';
import Header from './Components/Sections/Header/Header.js';
import Body from './Components/Sections/Body/Body.js';
import {BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/Sections/Footer/Footer';
import './App.css';

function App() {
  return (
      <div>
        <Router>
          <Header></Header>
          <Body></Body>
        </Router>
        <Footer></Footer>
      </div>
    
  );
}

export default App;
