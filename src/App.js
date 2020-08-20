import React from 'react'
import './app.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// 🖥 S C R E E N S
import Home from './Screens/Home'
import About from './Screens/About'
import Contribute from './Screens/Contribute'
import Download from './Screens/Download'

// 🎁 C O M P O N E N T S
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// 💫 M A I N  C O M P O N E N T
const App = () => {
  return (
    <Router >
      <Navigation />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contribute">
          <Contribute />
        </Route>
        <Route path="/download">
          <Download />
        </Route>
      </Switch>

      <Footer />

    </Router>
  );
}

export default App