import React from 'react';
import { BrowserRouter} from 'react-router-dom'; 
import { HashLink as Link } from 'react-router-hash-link';

import Directory from './portfoliodirectory.js';
import Footer from './footer.js';

import './App.css';
import Logos from './logoreel.js';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
      <div id= "home">
        <div className="navigation">
            <Link to="/pathLink#home" className="item">home</Link>
            <Link to="/pathLink#projects" className="item">projects</Link>
            <Link to="/pathLink#contact" className="item">contact</Link>
            <div className="animation start-home"></div>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div id= "projects">
        <Directory />
        </div>
        <Logos />
        </div>
        <div id= "contact">
        <Footer />
        </div>
        </BrowserRouter>
   
  );
}


export default App;
