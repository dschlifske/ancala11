import React from 'react';
import logo from './logo.svg';
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
        <NavBar />
        <p />
        <HeroLayout1 />
        <p />
        <Features2x2 />
        <p />
        <MarketingFooter />
      </header>
    </div>
  );
}

export default App;
