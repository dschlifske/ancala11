import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  HeroLayout3,
  MarketingFooter 
} from './ui-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroLayout3 />
        <MarketingFooter />
      </header>
    </div>
  );
}

export default App;
