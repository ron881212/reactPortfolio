import React from 'react';
import { Route, Switch, HashRouter } from "react-router-dom";
import Websites from './pages/Websites'
import PhoneApps from './pages/PhoneApps'
import About from './pages/About'
import Contact from './pages/Contact'
// import Nav from './components/Nav'

function App() {
  return (
    <HashRouter basename='/reactPortfolio'>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Websites} />
          <Route exact path="/PhoneApps" component={PhoneApps} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
