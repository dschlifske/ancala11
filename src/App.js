import React from 'react';
import logo from './logo.svg';
import {BrowserView, MobileView} from 'react-device-detect';
import './App.css';
import { 
  AncalaLandingPage1,
} from './ui-components';
import { Router, BrowserRouter, Routes, Route, useNavigate, Link, Navigate, NavLink } from "react-router-dom";
import './App.css';
import About from './pages/About'
import Home from './pages/index'
import NavBar from './NavBar/NavBar'
import { CgMenuRound } from 'react-icons/cg'


const landingPageOverrides = {
  "jonathan-borba-n1B6ftPB5Eg-unsplash 1": {
    src: './jonathan-borba-n1B6ftPB5Eg-unsplash.jpg'
  },
  "Screen Shot 2022-07-11 at 11.26 1": {
    src: './mammogramLogo.png'
  },
  "national-cancer-institute-SMxzEaidR20-unsplash 1": {
    src: './national-cancer-institute-SMxzEaidR20-unsplash.jpg'
  },
  "artem 1": {
    src: './artem.png'
  }
}

function App() {
  return (
    <div >
      <header className="App-header">
            {/*<BrowserView>
              <AncalaLandingPage1 overrides={landingPageOverrides}  />
            </BrowserView>
            <MobileView>
              <h1>No Mobile view yet. </h1>
              <h1>Log in on a laptop please!!! </h1>
            </MobileView>*/}
        <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
        {/*<AncalaLandingPage1 overrides={landingPageOverrides}  />*/}
      </header>
    </div>
  );
}

export default App;
