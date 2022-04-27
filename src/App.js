import React, { Component } from 'react';
import {Router, Route, HashRouter ,Switch} from 'react-router-dom';

import Signin from './pages/Signin/signin.jsx';
import Login from './pages/Login/Login.jsx';
import My from './pages/My/My.jsx';
import Home from './pages/Home/Home.jsx';
import Profile from './pages/Profile/Profile.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/login" component={Login} />
        <Route path="/my" component={My} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </HashRouter>
    );
  }
}

export default App;
