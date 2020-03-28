import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() {
  return (
<body className="body">
  <div className="navbar">
    <div ><h2>Your-Vote</h2></div>
    <div className="btn" id="buttons"><a href="./admin.html">Admin</a></div>
    <div className="btn" id="buttons"><a href="./politician.html">Politician</a></div>
</div>
        <div className="forms">
            <h2>Signin here</h2>
            <form action="user-dash.html">
              <input type="email" placeholder="email" required />
              <input type="password" placeholder="password" required />
              <input type="submit" value="submit" required />
            </form>
            <p>Want to signup?. <Link to="/">Click here</Link></p>
            <p>Forgot the password?. <Link to="/recover">Click here</Link></p>
            <div></div>
          </div>
          <div className="footer">
            <p>&copy; Your Vote 2020</p>
        </div>
</body>
  );
  }
}

export default Signup;