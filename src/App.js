import React from "react";
import './App.css';
import Homescreen from './Screens/home'
import Downloadscreen from './Screens/download'
import Aboutscreen from './Screens/about'
import Contributescreen from './Screens/contribute'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logosingle from './logoSingle.svg'
import Skelett from './Animation/SkelettSchräg.svg'
import Burger from './burgermenu'

export default function Navigation() {
  return (
    <Router >
         <Burger />
         <header>
         
            <img className="NavbarLogo" src={Logosingle} style={styles.logo} alt='NavbarLogo'/><text style={styles.logotext}>HIVE</text>
           
         <div className="NavbarIcons">
    
             < div className="menu">
            <Link to="/" style={styles.home}>HOME </Link>

            <Link to="/about" style={styles.about}>ABOUT </Link>
          
            <Link to="/contribute" style={styles.contribute}>CONTRIBUTE </Link>

            <Link to="/download" style={styles.download}>DOWNLOAD </Link>

               </div> 
            
          

        <Switch>
          <Route exact path="/">
            <Homescreen />
          </Route>
          <Route path="/about">
            <Aboutscreen />
          </Route>
          <Route path="/contribute">
            <Contributescreen />
          </Route>
          <Route path="/download">
            <Downloadscreen />
          </Route>
        </Switch>
        </div>
        </header>

         <body>
        <div className="infobox">
          <img src={Skelett} style={styles.skelett} />
        </div>
         </body>
      
    </Router>
   
    
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
       <Homescreen />
    </div>
  );
}

function Download() {
  return (
    <div>
        <Downloadscreen />
        
   </div>
  );
}

function Contribute() {
  return (
    <div>
      <Contributescreen />
    </div>
  );
}


function About() {
   return (
     <div>
       <Aboutscreen />
     </div>
   );
 }
 
 const styles = {};

 styles.home = {
   width: "100%",
   fontSize: "26px",
   textDecoration: 'none',
   paddingRight: 30,
   color:"white"
 
 };

 styles.about = {
   width: "100%",
   fontSize: "26px",
   textDecoration: 'none',
   paddingRight: 30,
   color:"white",
 
 };

 styles.contribute = {
  width: "100%",
  fontSize: "26px",
  textDecoration: 'none',
  paddingRight: 30,
  color:"white",

};

 styles.download = {
   width: "100%",
   fontSize: "26px",
   textDecoration: 'none',
   paddingRight: "15%",
   color:"white"

 };

 styles.logo = {
  width: "33px",
  paddingLeft:"15%",

};
styles.logotext = {
  color:"white",
  fontSize:"40px"
  
};
styles.skelett = {
  width: "20%",
  fontSize: "26px",
  paddingLeft: "10px",
};

