import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import admin from '../4.png';
import freedom from '../ef.jfif';
import liberty from '../gh.jfif';
import honesty from '../ij.jfif';
import integrity from '../kl.jfif';
import collaboration from '../ab.jfif';
import strength from '../gh.jfif';
import excellence from '../ef.jfif';
import passion from '../cd.jfif';

class EditDelete extends Component {
    render() {
        return (
<body>
    <div className="icon"><img src={admin} id="iconId" alt="admin" /></div>
    <div className="content">
        <div className="sidebar-vote">
            <ul>
                <li ><Link to="/create-party">Create a political party</Link></li>
                <li ><Link to="/create-office">Create a political office</Link></li>
                <li style={{background: "#234a7e"}}>Edit or delete</li>
                <li><Link to="./results-admin">Results</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
            <p className="greet">Hello admin</p>
        </div>
        <div className="subcontent-vote">
            <h3>Hello, make your choice!.</h3>
            <div className="image">
                <div className="image1">
                    <p className="name">Names: Olivier tura (Freedom)</p>
                    <p className="office">Office: Ministry of youth</p>
                    <img className="one" src={freedom} alt="freedom" />
                    <div className="voteheredit">
                        <p className="first"> <Link to="/create-party">EDIT</Link></p> 
                        <p className="second"> <Link to="admin-dashboard">DELETE</Link></p>
                    </div>
                </div>
                <div className="image1">
                    <p className="name">Names: Helen Smith (Liberty)</p>
                    <p className="office">Office: Ministry of infrastructure</p>
                    <img className="one" src={liberty} alt="liberty" />
                   <div className="voteheredit">
                    <p className="first"> <Link to="/create-party">EDIT</Link></p> 
                    <p className="second"> <Link to="admin-dashboard">DELETE</Link></p>
                   </div>
                </div>                
                <div className="image1">
                    <p className="name">Names: Jack brown (Honesty)</p>
                    <p className="office">Office: Ministry of security</p>
                    <img className="one" src={honesty} alt="honesty" />
                    <div className="voteheredit">
                        <p className="first"> <Link to="/create-party">EDIT</Link></p> 
                        <p className="second"> <Link to="admin-dashboard">DELETE</Link></p>
                    </div>
                </div>
                <div className="image1">
                    <p className="name">Names: Natalie Jane (Integrity)</p>
                    <p className="office">Office: Ministry of gender</p>
                    <img className="one" src={integrity} alt="integrity" />
                    <div className="voteheredit">
                        <p className="first"> <Link to="/create-party">EDIT</Link></p> 
                        <p className="second"> <Link to="admin-dashboard">DELETE</Link></p>
                    </div>
                </div>
                <div className="image1">
                    <p className="name">Names: John Rick (Collaboration)</p>
                    <p className="office">Office: Ministry of Sport</p>
                    <img className="one" src={collaboration} alt="collaboration" />
                    <div className="voteheredit">
                        <p className="first"> <Link to="/create-party">EDIT</Link></p> 
                        <p className="second"> <Link to="admin-dashboard">DELETE</Link></p>
                    </div>
                </div>
                <div className="image1">
                    <p className="name">Names: Patrick Clark (Passion)</p>
                    <p className="office">Office: Ministry of ICT</p>
                    <img className="one" src={passion} alt="passion" />
                    <div className="voteheredit">
                        <p className="first"> <Link to="/create-party">EDIT</Link></p> 
                        <p className="second"> <Link to="admin-dashboard">DELETE</Link></p>
                    </div>
                </div>
                <div className="image1">
                    <p className="name">Names: Malik Karim (Excellence)</p>
                    <p className="office">Office: Foreign affairs</p>
                    <img className="one" src={excellence} alt="excellence" />
                    <div className="voteheredit">
                        <p className="first"> <Link to="/create-party">EDIT</Link></p> 
                        <p className="second"> <Link to="admin-dashboard">DELETE</Link></p>
                    </div>
                </div>
                <div className="image1">
                    <p className="name">Names: Natalie Jane (Integrity)</p>
                    <p className="office">Office: Ministry of gender</p>
                    <img className="one" src={integrity} alt="integrity" />
                    <div className="voteheredit">
                        <p className="first"> <Link to="/create-party">EDIT</Link></p> 
                        <p className="second"> <Link to="admin-dashboard">DELETE</Link></p>
                    </div>
                </div>
                <div className="image1">
                    <p className="name">Names: Olivia Pope (Strength)</p>
                    <p className="office">Office: Ministry of justice</p>
                    <img className="one" src={strength} alt="strength" />
                    <div className="voteheredit">
                        <p className="first"> <Link to="/create-party">EDIT</Link></p> 
                        <p className="second"> <Link to="admin-dashboard">DELETE</Link></p>
                    </div>
                </div>
        </div>
    </div>
    </div>
    <div className="footer">
        <p>&copy; Your Vote 2020</p>
    </div>
</body>
        );
    }
}

export default EditDelete;
