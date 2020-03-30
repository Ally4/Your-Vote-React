import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PoliticianSignin extends Component {
    render() {
        return (
            <body class="body">
  <div class="navbar">
    <div ><h2>Your-Vote</h2></div>
    <div class="btn" id="buttons"><Link to="/signin">Signin</Link></div>
    <div class="btn" id="buttons"><Link to="/admin-signin">Admin</Link></div>
</div>
        <div class="forms">
            <h2>Sign as politician</h2>
            <form action="politician-dash.html">
              <input type="email" placeholder="email" required />
              <input type="password" placeholder="password" required />
              <Link to="/politician-dashboard">
              <input type="submit" value="submit" required />
              </Link>
            </form>
            <p>Want to signup?. <Link to="/">Click here</Link></p>
            <p>Forgot the password?. <Link to="/recover">Click here</Link></p>
            <div></div>
          </div>
          <div class="footer">
            <p>&copy; Vote4you 2020</p>
        </div>
</body>
        );
    }
}

export default PoliticianSignin;
