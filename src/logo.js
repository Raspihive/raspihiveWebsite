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
    <div>
      
        <img src={baselogofüllung} className="baselogofüllung-logo" />
        <img src={logo} className="App-logo" />
        <img src={eins} className="eins-logo" />
        <img src={zwei} className="zwei-logo" />
        <img src={drei} className="drei-logo" />
        <img src={vier} className="vier-logo"/>
        <img src={einsfade} className="einsfade-logo" />
        <img src={zweifade} className="zweifade-logo" />
        <img src={dreifade} className="dreifade-logo" />
        <img src={vierfade} className="vierfade-logo" />
        <img src={fünffade} className="fünffade-logo" />
        <img src={sechsfade} className="sechsfade-logo" />
        <img src={siebenfade} className="siebenfade-logo" />
        <img src={rahmen} className="rahmen-logo" />
  
     </div>
    
  );
}

export default Logo;