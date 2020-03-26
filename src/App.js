import React, { Component } from 'react';
import Nav from './components/Nav';
import Signup from './components/Signup';
import './App.css';
class App extends Component {
  render() {
  return (
    <div className = 'body'>
      <Nav />
      <Signup />
    </div>
  );
  }
}

export default App;
