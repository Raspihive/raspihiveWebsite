import React from 'react';
import Logo from '../logo';
import '../App.css';
import Skelett from '../Animation/SkelettSchräg.svg'



function Homescreen() {
  return (
   <div>
      <header className="App-header">
      </header>
      <body className="App-body">
      </body>

      <div className="infobox">
      <img src={Skelett} style={styles.skelett}/>
      </div>
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
styles.skelett = {
   width: "20%",
   fontSize: "26px",
   color:"white",
   paddingLeft: "20px"
 
 };

export default Homescreen;



