import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminSignin extends Component {
    render() {
        return (
            <body class="body">
  <div class="navbar">
    <div ><h2>Your-Vote</h2></div>
    <div class="btn" id="buttons"><a href="../index.html">Signup</a></div>
    <div class="btn" id="buttons"><a href="./politician.html">Politician</a></div>
</div>
        <div class="forms">
            <h2>Sign as admin</h2>
            <form action="admin-dash.html">
              <input type="email" placeholder="email" required />
              <input type="password" placeholder="password" required />
              <input type="submit" value="submit" required />
            </form>
            <p>Want to signup?. <Link to="/">Click here</Link></p>
            <p>Forgot the password?. <Link to="/recover">Click here</Link></p>
            <div></div>
          </div>
          <div class="footer">
            <p>&copy; Your Vote 2020</p>
        </div>
</body>
        );
    }
}

export default AdminSignin;
