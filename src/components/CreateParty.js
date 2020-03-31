import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import admin from '../4.png';

class CreateParty extends Component {
    render() {
        return (
<body>
    <div className="icon"><img src={admin} id="iconId" alt="admin"/></div>
    <div className="content">
        <div className="sidebar">
            <ul>
                <li style={{background: "#234a7e"}}>Create a political party</li>
                <li ><Link to="">Create a political office</Link></li>
                <li><Link to="">Edit or delete</Link></li>
                <li><Link to="/results-admin">Results</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
            <p className="greet">Hello Admin</p>
        </div>
        <div className="subcontent">
            <h3>Create a political party!.</h3>
            <div className="forms-create">
                <form>
                  <input type="text" id="create" placeholder="Name of the political party" required />
                  <input type="file" id="create" name="img" accept="image/*" />
                  <Link to="/admin-dashboard">
                  <input type="submit" id="create" value="Create" required />
                  </Link>
                </form>
                <div></div>
              </div>
        </div>
    </div>
    <div className="footer">
        <p>&copy; Vote4you 2020</p>
    </div>
</body>
        );
    }
}

export default CreateParty;