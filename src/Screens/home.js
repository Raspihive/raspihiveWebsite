import React from 'react';
import '../App.css';
import desk from '../Images/desk.jpg'
import deskHover from '../Images/desk-hover.svg'



function Homescreen() {
  return (
   <div>
      <header className="App-header">
      </header>
      <body className="App-body">
        <img src={desk} className="desk" alt="desk" />
      </body>

      
   </div>
    
    
  );
}
const styles = {};

styles.infobox = {
  width: "100%",
  fontSize: "26px",
  color:"white",
  backgroundColor:"black"

};


export default Homescreen;



