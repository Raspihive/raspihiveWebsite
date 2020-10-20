import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// 🖥 S C R E E N S
import Home from './Screens/home'
import About from './Screens/about'
import Contribute from './Screens/contribute'
import Download from './Screens/download'
import Privacy from './Screens/privacypolicy'

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
        <Route path="/privacypolicy">
          <Privacy />
        </Route>
      </Switch>

      <Footer />

    </Router>
  );
}

export default App