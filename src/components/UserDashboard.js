import React, { Component } from 'react';
import user from '../images.png';
import { Link } from 'react-router-dom';

class UserDashboard extends Component {
    render() {
        return (
<body>
    <div class="icon"><img src={user} id="iconId" alt="user"/></div>
    <div class="content">
        <div class="sidebar">
            <ul>
                <li ><Link href="./vote.html">Vote</Link></li>
                <li ><Link href="political-parties.html">Political parties</Link></li>
                <li ><Link href="./voted.html">Voted</Link></li>
                <li ><Link href="./results-user.html">Results</Link></li>
                <li ><Link href="../index.html">Logout</Link></li>
            </ul>
            <p class="greet">Hello User</p>
        </div>
        <div class="subcontent">
            <h3>Hello, make your choice!.</h3>
        </div>
    </div>
    <div class="footer">
        <p>&copy; Vote4you 2020</p>
    </div>
</body>
        );
    }
}

export default UserDashboard;
