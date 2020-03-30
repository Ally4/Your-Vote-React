import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recover extends Component {
  render() {
  return (
<body class="body">
  <div class="navbar">
    <div ><h2>Your-Vote</h2></div>
    <div class="btn" id="buttons"><Link to="/admin-signin">Admin</Link></div>
    <div className="btn" id="buttons"><Link to="politician-signin">Politician</Link></div>
</div>
        <div class="forms">
            <h2>Recover your password</h2>
            <form action="user-dash.html">
              <input type="email" placeholder="email" required />
              <input type="password" placeholder="new password" required />
              <input type="submit" value="submit" required />
            </form>
            <p>Want to signin?. <Link to="/signin">Click here</Link></p>
            <p>Want to signup?.  <Link to="/">Click here</Link></p>
            <div></div>
          </div>
          <div class="footer">
            <p>&copy; Vote4you 2020</p>
        </div>
</body>
  );
  }
}

export default Recover;