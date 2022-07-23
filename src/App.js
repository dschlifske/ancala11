import React from 'react';
import logo from './logo.svg';
import {BrowserView, MobileView} from 'react-device-detect';
import './App.css';
import { 
  NavBar,
  HeroLayout1,
  Features2x2,
  HeroLayout4,
  MarketingFooter,
  AncalaLandingPage1 
} from './ui-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <BrowserView>
              <AncalaLandingPage1 />
            </BrowserView>
            <MobileView>
              <h1>No Mobile view yet</h1>
            </MobileView>
      </header>
    </div>
  );
}

export default App;
