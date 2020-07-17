import React from 'react';
import '../App.css';
import desk from '../Images/desk.jpg'
import deskhover from '../Images/desk-hover.png'
import Hometext from './hometext'


function Homescreen() {
  return (
   <div>
      <header>
      </header>
      <body>
        <img src={deskhover} className="desk-hover" alt="desk-hover"/>
        <img src={desk} className="desk" alt="desk" />
      </body>
      <Hometext />
      
   </div>
    
    
  );
}


export default Homescreen;



