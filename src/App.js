import React from 'react';
import logo from './logo.svg';
import {BrowserView, MobileView} from 'react-device-detect';
import './App.css';
import { 
  AncalaLandingPage1 
} from './ui-components';

function App() {
  return (
    <div >
      <header className="App-header">
            <BrowserView>
              <AncalaLandingPage1 />
            </BrowserView>
            <MobileView>
              <h1>No Mobile view yet. Log in on a laptop please!</h1>
            </MobileView>
      </header>
    </div>
  );
}

export default App;
