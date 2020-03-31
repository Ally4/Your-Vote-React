import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import admin from '../4.png';

class ResultsAdmin extends Component {
    render() {
        return (
<body>
    <div class="icon"><img src={admin} id="iconId" alt="admin"/></div>
    <div className="content">
        <div className="sidebar">
            <ul>
                <li ><Link to="/create-party">Create a political party</Link></li>
                <li ><Link to="/create-office">Create a political office</Link></li>
                <li ><Link to="/edit-delete">Edit or delete</Link></li>
                <li style={{background: "#234a7e"}}>Results</li>
                <li><Link to="/">Logout</Link></li>
            </ul>
            <p className="greet">Hello admin</p>
        </div>
        <div className="subcontent">
            <h3>Hello, Here is the results of the elections?.</h3>
            <div className="information">
                <p>JOHN Doe (Democrate) on the ministry of health</p>
                <p>77%</p>
                <div className="graph">
                    <div className="percentage" style={{width: "77%"}}></div>
                </div>
            </div>
            <div className="information">
                <p>JANE Doe (Republican) on the ministry of justice</p>
                <p> 83%</p>
                <div className="graph">
                    <div class="percentage" style={{width: "83%"}}></div>
                </div>
            </div>
            <div className="information">
                <p>JACK Sparrow (Carraibean) on the ministry of transport</p>
                <p>70%</p>
                <div className="graph">
                    <div className="percentage" style={{width: "70%"}}></div>
                </div>
            </div>
            <div className="information">
                <p>JACK Bauer (Chrono) on the mistry of security</p>
                <p>90%</p>
                <div className="graph">
                    <div className="percentage" style={{width: "90%"}}></div>
                </div>
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

export default ResultsAdmin;
