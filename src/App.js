import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// S C R E E N S
import Homescreen from './Screens/Home'
import Downloadscreen from './Screens/Download'
import Aboutscreen from './Screens/About'
import Contributescreen from './Screens/Contribute'

// C O M P O N E N T S
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// C O M P O N E N T
const App = () => {
  return (
    <Router >
      <Navigation />

      {/* Screen */}
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

      <Footer />

    </Router>
  );
}

const styles = {}

styles.home = {
  width: "100%",
  fontSize: "26px",
  textDecoration: 'none',
  paddingRight: 30,
  color:"white"
}

styles.about = {
  fontSize: "26px",
  textDecoration: 'none',
  paddingRight: 30,
  color:"white",
};

 styles.contribute = {
  fontSize: "26px",
  textDecoration: 'none',
  paddingRight: 30,
  color:"white",

};

 styles.download = {
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

export default App