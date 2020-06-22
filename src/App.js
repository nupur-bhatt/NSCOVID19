import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard';
import latestUpdates from './components/latestUpdates';
import registerTab from './components/registerTab';
import signInTab from './components/signInTab';


class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/dashboard" component={Dashboard}/> 
          <Route exact path="/latestupdates" component={latestUpdates}/>
          <Route exact path="/signin" component={signInTab}/>
          <Route exact path="/register" component={registerTab}/>
       </Switch>
      </div>
       </Router>
       </div>
    );
  }
}

export default App;
