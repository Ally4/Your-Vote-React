import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import './App.css';
class App extends Component {
  render() {
  return (
    <Router>
    <div className = 'body'>
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route />
      </Switch>
    </div>
    </Router>
  );
  }
}

export default App;
