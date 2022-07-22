import React from 'react';
import logo from './logo.svg';
import {BrowserView, MobileView} from 'react-device-detect';
import './App.css';
import { 
  NavBar,
  HeroLayout1,
  Features2x2,
  MarketingFooter 
} from './ui-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <BrowserView>
              <h1>This is rendered only in browser</h1>
              <NavBar />
              <p />
              <HeroLayout1 />
              <p />
              <Features2x2 />
              <p />
              <MarketingFooter />
            </BrowserView>
            <MobileView>
              <h1>This is rendered only on mobile</h1>
            </MobileView>
      </header>
    </div>
  );
}

export default App;
