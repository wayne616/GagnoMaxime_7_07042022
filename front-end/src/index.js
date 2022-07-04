import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Connexion from './pages/Connexion/Connexion';

import Home from './pages/Home/Home';

import Setting from './pages/Setting/Setting';

import axios from 'axios';
 
axios.defaults.headers.common.Authorization = "Bearer " + localStorage.token

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Route exact path="/">
      <Connexion />
    </Route>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Setting">
          <Setting />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)