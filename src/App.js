import React from "react";
import './App.css';
import Homescreen from './Screens/home'
import Downloadscreen from './Screens/download'
import Aboutscreen from './Screens/about'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Navigation() {
  return (
   
    <Router >
         <header className="Navbar">
          
            <Link to="/" style={styles.home}>HOME </Link>
          
            <Link to="/about" style={styles.about}>ABOUT </Link>
          
            <Link to="/download" style={styles.download}>DOWNLOAD </Link>
            
        <Switch>
          <Route exact path="/">
            <Homescreen />
          </Route>
          <Route path="/about">
            <Aboutscreen />
          </Route>
          <Route path="/download">
            <Downloadscreen />
          </Route>
        </Switch>
        </header>
         <body>
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

 styles.download = {
   width: "100%",
   fontSize: "26px",
   textDecoration: 'none',
   paddingRight: 120,
   color:"white"

 };
