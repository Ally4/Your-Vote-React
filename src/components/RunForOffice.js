import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import politician from '../5.png';

class RunForOffice extends Component {
    render() {
        return (
<body>
    <div className="icon"><img src={politician} id="iconId" alt="politician" /></div>
    <div className="content">
        <div className="sidebar">
            <ul>
                <li style={{background: "#234a7e"}}>Run for an office</li>
                <li><Link to="/results-politician">Results</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
            <p className="greet">Hello politician</p>
        </div>
        <div className="subcontent">
            <h3>Create the political party!.</h3>
            <div className="forms-create">
                <form>
                  <input type="text" id="create" placeholder="Your name" required />
                  <input type="text" id="create" placeholder="Your political party" required /> 
                  <input type="file" id="create" name="img" accept="image/*" />
                  <Link to="/politician-dashboard">
                  <input type="submit" id="create" value="Campaign" required />
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

export default RunForOffice;
