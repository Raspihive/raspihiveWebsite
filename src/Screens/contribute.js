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
      <div className="content-contribute">
      
      <p>How can I help make Hive better?
            Its simply created for the users, by the users. There are no highly paid developers or poorly paid support 
            personnel on the phones ready to take your call. There are only users who have seen a problem and done their 
            best to fix it. This means that Hive will always need the contributions of users like you. 
            How can you get involved?
      </p>

      <a style={styles.github} target="_blank" href="https://github.com/Cryptec/raspihive">GitHub</a>
      
      </div>
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
