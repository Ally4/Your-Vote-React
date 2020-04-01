import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Recover from './components/Recover';
import AdminSignin from './components/AdminSignin';
import PoliticianSignin from './components/PoliticianSignin';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import PoliticianDashboard from './components/PoliticianDashboard';
import ResultsPolitician from './components/ResultsPolitician';
import ResultsAdmin from './components/ResultsAdmin';
import ResultsUser from './components/ResultsUser';
import CreateParty from './components/CreateParty';
import CreateOffice from './components/CreateOffice';
import EditDelete from './components/EditDelete';
import RunForOffice from './components/RunForOffice';
import Vote from './components/Vote';
import Voted from './components/Voted';
import PoliticalParties from './components/PoliticalParties';
import './App.css';
class App extends Component {
  render() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/recover" component={Recover} />
        <Route path="/admin-signin" component={AdminSignin} />
        <Route path="/politician-signin" component={PoliticianSignin} />
        <Route path="/user-dashboard" component={UserDashboard} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/politician-dashboard" component={PoliticianDashboard} />
        <Route path="/results-politician" component={ResultsPolitician} />
        <Route path="/results-admin" component={ResultsAdmin} />
        <Route path="/results-user" component={ResultsUser} />
        <Route path="/create-party" component={CreateParty} />
        <Route path="/create-office" component={CreateOffice} />
        <Route path="/edit-delete" component={EditDelete} />
        <Route path="/run-for-office" component={RunForOffice} />
        <Route path="/vote" component={Vote} />
        <Route path="/voted" component={Voted} />
        <Route path="/political-parties" component={PoliticalParties} />
        <Route />
      </Switch>
    </Router>
  );
  }
}

export default App;
