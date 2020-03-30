import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={value:''};
  //   this.handleChange=this.handleChange.bind(this);
  //   this.handleSubmit=this.handleSubmit.bind(this);
  // }
  // handleChange(event){
  //   this.setState({value: event.target.value});
  // }
  // handleSubmit{
  //   return <Redirect to="/UserDashboard" />;
  // }
  render() {
  return (
<body className="body">
  <div className="navbar">
    <div ><h2>Your-Vote</h2></div>
    <div className="btn" id="buttons"><Link to="/admin-signin">Admin</Link></div>
    <div className="btn" id="buttons"><Link to="politician-signin">Politician</Link></div>
</div>
        <div className="forms">
            <h2>Signin here</h2>
            <form>
              <input type="email" placeholder="email" required />
              <input type="password" placeholder="password" required />
              <Link to="/user-dashboard">
              <input type="submit" value="Submit" required />
              </Link>
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