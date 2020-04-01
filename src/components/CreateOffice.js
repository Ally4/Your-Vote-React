import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import admin from '../4.png';

class CreateOffice extends Component {
    render() {
        return (
<body>
    <div className="icon"><img src={admin} id="iconId" alt="admin"/></div>
    <div className="content">
        <div className="sidebar">
            <ul>
                <li ><a href="/create-party">Create a political party</a></li>
                <li style={{background: "#234a7e"}}>Create a political office</li>
                <li><a href="/edit-delete">Edit or delete</a></li>
                <li><a href="/results-admin">Results</a></li>
                <li><a href="/">Logout</a></li>
            </ul>
            <p className="greet">Hello Admin</p>
        </div>
        <div className="subcontent">
            <h3>Create a political office!.</h3>
            <div className="forms-create">
                <form>
                  <input type="text" id="create" placeholder="Name of the office" required />
                  <input type="text" id="create" placeholder="Branch of the office" required />
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

export default CreateOffice;
