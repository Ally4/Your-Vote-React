import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import user from '../images.png';
import freedom from '../ef.jfif';
import liberty from '../gh.jfif';
import honesty from '../ij.jfif';
import integrity from '../kl.jfif';
import collaboration from '../ab.jfif';
import strength from '../gh.jfif';
import excellence from '../ef.jfif';
import passion from '../cd.jfif';

class Voted extends Component {
    render() {
        return (
<body>
    <div className="icon"><img src={user} id="iconId" alt="user"/></div>
    <div className="content">
        <div className="sidebar-vote">
            <ul>
                <li ><Link to="/vote">Vote</Link></li>
                <li ><Link to="/political-parties">Political parties</Link></li>
                <li style={{background: "#234a7e"}}>Voted</li>
                <li><Link to="/results-user">Results</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
            <p className="greet">Hello User</p>
        </div>
        <div className="subcontent-vote">
            <h3>Here are the choices you made!.</h3>
            <div className="image">
            <div className="image1">
                    <p className="name">Names: Olivier tura (Freedom)</p>
                    <p className="office">Office: Ministry of youth</p>
                    <img className="one" src={freedom} alt="freedom" />
                    <div className="votehere"><p> <Link to="/user-dashboard">VOTED</Link></p> </div>
                </div>
                <div className="image1">
                    <p className="name">Names: Helen Smith (Liberty)</p>
                    <p className="office">Office: Ministry of infrastructure</p>
                    <img className="one" src={liberty} alt="liberty" />
                   <div className="votehere"><p> <Link to="/user-dashboard">VOTED</Link></p> </div>
                </div>                
                <div className="image1">
                    <p className="name">Names: Patrick Clark (Passion)</p>
                    <p className="office">Office: Ministry of ICT</p>
                    <img className="one" src={passion} alt="passion" />
                    <div className="votehere"><p> <Link to="/user-dashboard">VOTED</Link></p> </div>
                </div>
                <div className="image1">
                    <p className="name">Names: Natalie Jane (Integrity)</p>
                    <p className="office">Office: Ministry of gender</p>
                    <img className="one" src={integrity} alt="integrity" />
                    <div className="votehere"><p> <Link to="/user-dashboard">VOTED</Link></p> </div>
                </div>
                <div className="image1">
                    <p className="name">Names: John Rick (Collaboration)</p>
                    <p className="office">Office: Ministry of Sport</p>
                    <img className="one" src={collaboration} alt="collaboration" />
                    <div className="votehere"><p> <Link to="/user-dashboard">VOTED</Link></p> </div>
                </div>
                <div className="image1">
                    <p className="name">Names: Malik Karim (Excellence)</p>
                    <p className="office">Office: Foreign affairs</p>
                    <img className="one" src={excellence} alt="excellence" />
                    <div className="votehere"><p> <Link to="/user-dashboard">VOTED</Link></p> </div>
                </div>
                <div className="image1">
                    <p className="name">Names: Olivia Pope (Strength)</p>
                    <p className="office">Office: Ministry of justice</p>
                    <img className="one" src={strength} alt="strength" />
                    <div className="votehere"><p> <Link to="/user-dashboard">VOTED</Link></p> </div>
                </div>
                <div className="image1">
                    <p className="name">Names: Jack brown (Honesty)</p>
                    <p className="office">Office: Ministry of security</p>
                    <img className="one" src={honesty} alt="honesty" />
                    <div className="votehere"><p> <Link to="/user-dashboard">VOTED</Link></p> </div>
                </div>
                <div className="image1">
                    <p className="name">Names: Natalie Jane (Integrity)</p>
                    <p className="office">Office: Ministry of gender</p>
                    <img className="one" src={integrity} alt="integrity" />
                    <div className="votehere"><p> <Link to="/user-dashboard">VOTED</Link></p> </div>
                </div>
        </div>
    </div>
    </div>
    <div className="footer">
        <p>&copy; Your Vote 2020</p>
    </div>
    </body>
        )
    }
}

export default Voted;
