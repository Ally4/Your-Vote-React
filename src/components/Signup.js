import React, { Component } from 'react';
// import './App.css';

class Signup extends Component {
  render() {
  return (
    <div className="forms">
    <h2>Signup here</h2>
    <form>
      <input type="text" placeholder="firstName" required />
      <input type="text" placeholder="lastName" required />
      <input type="email" placeholder="email" required />
      <input type="password" placeholder="password" required />
      <input type="submit" value="submit" required />
    </form>
    <p>Want to signin?. <a href="./html/signin.html">Click here</a></p>
    <p>Forgot the password?. <a href="./html/recover.html">Click here</a></p>
    <div></div>
  </div>
  );
  }
}

export default Signup;
