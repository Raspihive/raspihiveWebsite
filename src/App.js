import React from 'react';
import logo from './baselogo.svg';
import rahmen from './Animation/rahmen.svg'
import eins from './Animation/1.svg'
import zwei from './Animation/2.svg'
import drei from './Animation/3.svg'
import vier from './Animation/4.svg'
import einsfade from './Animation/einsfade.svg'
import zweifade from './Animation/zweifade.svg'
import dreifade from './Animation/dreifade.svg'
import vierfade from './Animation/vierfade.svg'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <img src={eins} className="eins-logo" alt="eins-logo" />
        <img src={zwei} className="zwei-logo" alt="zwei-logo" />
        <img src={drei} className="drei-logo" alt="drei-logo" />
        <img src={vier} className="vier-logo" alt="vier-logo" />
        <img src={einsfade} className="einsfade-logo" alt="einsfade-logo" />
        <img src={zweifade} className="zweifade-logo" alt="zweifade-logo" />
        <img src={dreifade} className="dreifade-logo" alt="dreifade-logo" />
        <img src={vierfade} className="vierfade-logo" alt="vierfade-logo" />
        <img src={rahmen} className="rahmen-logo" alt="rahmen-logo" />
  
        
      </header>
    </div>
    
  );
}

export default App;
