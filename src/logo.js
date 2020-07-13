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
import fünffade from './Animation/fünffade.svg'
import sechsfade from './Animation/sechsfade.svg'
import siebenfade from './Animation/siebenfade.svg'
import baselogofüllung from './baselogofüllung.svg'

import './App.css';

function Logo() {
  return (
    <div className="App">

      <header className="App-header">   
      
        <img src={baselogofüllung} className="baselogofüllung-logo" alt="baselogofüllung-logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={eins} className="eins-logo" alt="eins-logo" />
        <img src={zwei} className="zwei-logo" alt="zwei-logo" />
        <img src={drei} className="drei-logo" alt="drei-logo" />
        <img src={vier} className="vier-logo" alt="vier-logo" />
        <img src={einsfade} className="einsfade-logo" alt="einsfade-logo" />
        <img src={zweifade} className="zweifade-logo" alt="zweifade-logo" />
        <img src={dreifade} className="dreifade-logo" alt="dreifade-logo" />
        <img src={vierfade} className="vierfade-logo" alt="vierfade-logo" />
        <img src={fünffade} className="fünffade-logo" alt="fünffade-logo" />
        <img src={sechsfade} className="sechsfade-logo" alt="sechsfade-logo" />
        <img src={siebenfade} className="siebenfade-logo" alt="siebenfade-logo" />
        <img src={rahmen} className="rahmen-logo" alt="rahmen-logo" />
  
        </header>
   
    </div>
    
  );
}

export default Logo;
