import React, { Component } from 'react';
// import './App.css';

class Nav extends Component {
  render() {
  return (
      <div className="navbar">
            <div ><h2>Your-Vote</h2></div>
            <div class="btn" id="buttons"><a href="./html/admin.html">Admin</a></div>
            <div class="btn" id="buttons"><a href="./html/politician.html">Politician</a></div>
        </div>
  );
  }
}

export default Nav;
