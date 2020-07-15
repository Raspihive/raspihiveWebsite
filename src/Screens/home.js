import React from 'react';
import Logo from '../logo';
import '../App.css';



function Homescreen() {
  return (
   <div>
      <header className="App-header">
      </header>
      <body className="App-body">
      <div style={styles.infobox}>

      </div>
      </body>
   </div>
    
    
  );
}
const styles = {};

styles.infobox = {
  width: "100%",
  fontSize: "26px",
  color:"white"

};
styles.skelett = {
   width: "20%",
   fontSize: "26px",
   color:"white",
 
 };

export default Homescreen;



