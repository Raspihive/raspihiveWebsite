import React from "react";
import './App.css';
import Homescreen from './Screens/home'
import Downloadscreen from './Screens/download'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Navigation() {
  return (
   <div class="Navbar">
    <Router >
      <div>
        <ul>
          <li>
            <Link to="/">Home </Link> \t\t
          
            <Link to="/about">About </Link> \t\t
          
            <Link to="/download">Download </Link> \t\t\t\t\t\t\t\t
          </li>
        </ul>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/download">
            <Download />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
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
       <h2>About</h2>
     </div>
   );
 }
 