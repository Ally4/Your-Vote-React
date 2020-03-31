import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import user from '../images.png';
import freedom1 from '../zf.png';
import liberty1 from '../za.png';
import honesty1 from '../zb.png';
import integrity1 from '../zc.png';
import collaboration1 from '../zd.png';
import strength1 from '../zf.png';
import excellence1 from '../zg.png';
import passion1 from '../ze.png';

class PoliticalParties extends Component {
    render() {
        return (
<body>
    <div className="icon"><img src={user} id="iconId" alt="user" /></div>
    <div className="content">
        <div className="sidebar-vote">
            <ul>
                <li ><Link to="/vote">Vote</Link></li>
                <li style={{background: "#234a7e"}}>Political parties</li>
                <li><Link to="/voted">Voted</Link></li>
                <li><Link to="/results-user">Results</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
            <p className="greet">Hello User</p>
        </div>
        <div className="subcontent-vote">
            <h3>Hello, Here are the political parties!.</h3>
            <div className="image">
                <div className="image1">
                    <p className="name">Freedom</p>
                    <img className="one" src={freedom1} style={{height: "500px;"}} alt="Freedom" />
                </div>
                <div className="image1">
                    <p className="name">Liberty</p>
                    <img className="one" src={liberty1} style={{height: "500px;"}} alt="Liberty" />
                </div>                
                <div className="image1">
                    <p className="name">Honesty</p>
                    <img className="one" src={honesty1} style={{height: "500px;"}} alt="Honesty" />
                </div>
                <div className="image1">
                    <p className="name">Integrity</p>
                    <img className="one" src={integrity1} style={{height: "500px;"}} alt="Integrity" />
                </div>
                <div className="image1">
                    <p className="name">Collaboration</p>
                    <img className="one" src={collaboration1} style={{height: "500px;"}} alt="Collaboration" />
                </div>
                <div className="image1">
                    <p className="name">Passion</p>
                    <img className="one" src={passion1} style={{height: "500px;"}} alt="Passion" />
                </div>
                <div className="image1">
                    <p className="name">Excellence</p>
                    <img className="one" src={excellence1} style={{height: "500px;"}} alt="Excellence" />
                </div>
                <div className="image1">
                    <p className="name">Honesty</p>
                    <img className="one" src={honesty1} style={{height: "500px;"}} alt="Honesty" />
                </div>
                <div className="image1">
                    <p className="name">Strength</p>
                    <img className="one" src={strength1} style={{height: "500px;"}} alt="Strenght" />
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

export default PoliticalParties;
