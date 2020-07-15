import React from 'react';
import Logo from '../logo';
import '../App.css';



function Contributescreen() {
  return (
   <div >
      <header className="App-header">
      </header>
      <body className="App-body"> 
      </body>
      <a style={styles.github} target="_blank" href="https://github.com/Cryptec/raspihive">GitHub</a>
   </div>
    
    
  );
}
const styles = {};

styles.github = {
  width: "100%",
  fontSize: "26px",
  color:"black",
  textDecoration: 'none',
  zIndex:"4",

};
export default Contributescreen;
