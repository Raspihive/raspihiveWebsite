import React from 'react';
import Logo from '../logo';
import '../App.css';



function Homescreen() {
  return (
   <div>
      <header className="App-header">
         <Logo />
      </header>
      <body className="App-body"> 
      <div className="infobox">
      100% Open Source! Yes, you read that right! Raspihive is built and run for the community, by the community.
      <text>So that saying really is correct... The best things in life are free!</text>
      </div>
      </body>
   </div>
    
    
  );
}

export default Homescreen;

