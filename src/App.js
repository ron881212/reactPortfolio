import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Websites from './pages/Websites'
import PhoneApps from './pages/PhoneApps'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './components/Nav'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/reactPortfolio" component={Websites} />
          <Route exact path="/PhoneApps" component={PhoneApps} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
