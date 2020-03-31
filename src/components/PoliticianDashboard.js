import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import politician from '../5.png';

class PoliticianDashboard extends Component {
    render() {
        return (
<body>
    <div class="icon"><img src={politician} id="iconId" alt="politician" /></div>
    <div class="content">
        <div class="sidebar">
            <ul>
                <li ><Link to="">Run for an office</Link></li>
                <li><Link to="/results-politician">Results</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
            <p class="greet">Hello politician</p>
        </div>
        <div class="subcontent">
            <h3>Hello, How is your day?.</h3>
        </div>
    </div>
    <div className="footer">
        <p>&copy; Vote4you 2020</p>
    </div>
</body>
        );
    }
}

export default PoliticianDashboard;
