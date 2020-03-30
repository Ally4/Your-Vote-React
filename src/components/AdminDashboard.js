import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import admin from '../4.png';

class AdminDashboard extends Component {
    render() {
        return (
<body>
    <div class="icon"><img src={admin} id="iconId" alt="admin"/></div>
    <div class="content">
        <div class="sidebar">
            <ul>
                <li ><Link to="./create-party-admin.html">Create a political party</Link></li>
                <li ><Link to="./create-office-admin.html">Create a political office</Link></li>
                <li ><Link to="./delete-edit.html">Edit or delete</Link></li>
                <li ><Link to="./results.html">Results</Link></li>
                <li ><Link to="../index.html">Logout</Link></li>
            </ul>
            <p class="greet">Hello admin</p>
        </div>
        <div class="subcontent">
            <h3>Hello, what are your plans today?.</h3>
        </div>
    </div>
    <div class="footer">
        <p>&copy; Vote4you 2020</p>
    </div>
</body>
        );
    }
}

export default AdminDashboard;