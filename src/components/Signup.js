import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {

  render() {
    return (
    <div className="body">
    <div class="navbar">
      <div ><h2>Your-Vote</h2></div>
      <div class="btn" id="buttons"><Link to="/admin-signin">Admin</Link></div>
      <div class="btn" id="buttons"><Link to="/politician-signin">Politician</Link></div>
    </div>
    <div className="forms">
    <h2>Signup here</h2>
    <form action="/UserDashboard">
      <input type="text" placeholder="firstName" required />
      <input type="text" placeholder="lastName" required />
      <input type="email" placeholder="email" required />
      <input type="password" placeholder="password" required />
      <input type="submit" value="submit" required />
    </form>
    <p>Want to signin?. <Link to="/signin">Click here</Link></p>
    <p>Forgot the password?. <Link to="/recover">Click here</Link></p>
    <div></div>
  </div>
  </div>
    );
  }
}

export default Signup;
