import React from 'react';
import { BrowserRouter} from 'react-router-dom'; 
import { HashLink as Link } from 'react-router-hash-link';

import Directory from './portfoliodirectory.js';
import Footer from './footer.js';

import './App.css';
import Logos from './logoreel.js';
import About from './about.js';

function App() {
  return (
    <BrowserRouter>
        <div id= "home">
          <div className="navigation-container">
            <div className="navigation">
                <Link to="/pathLink#home" className="item">
                home
                </Link>
                <Link to="/pathLink#projects" className="item">
                projects
                </Link>
                <Link to="/pathLink#contact" className="item">
                contact
                </Link>
                <div className="animation start-home"></div>
              </div>
            </div>
            </div>
        <div className="main">
        <About />
        <div className="sub-container">
        <div id= "projects">
        </div>
        <Directory />
        <Logos />
        </div>
        </div>
        <div id= "contact">
        <Footer />
        </div>
    </BrowserRouter>
   
  );
}


export default App;
