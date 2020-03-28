import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Recover from './components/Recover';
import AdminSignin from './components/AdminSignin';
import PoliticianSignin from './components/PoliticianSignin';
import './App.css';
class App extends Component {
  render() {
  return (
    <Router>
    <div className = 'body'>
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/recover" component={Recover} />
        <Route path="/admin-signin" component={AdminSignin} />
        <Route path="/politician-signin" component={PoliticianSignin} />
        <Route />
      </Switch>
    </div>
    </Router>
  );
  }
}

export default App;
