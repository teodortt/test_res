import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './custom.scss';
import React from 'react';

import One from './components/One';
import Two from './components/Two';
import Home from './components/Home';
import Navigation from './components/Navigation';
// import { Navbar, Nav, Container } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <>
        <Navigation />
        <Router>
          <Switch>
            <Route path='/one' component={One} />
            <Route path='/two' component={Two} />
            <Route exact path='/' component={Home} />

          </Switch>
        </Router>
      </>


    </div>
  );
}

export default App;
