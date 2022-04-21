import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Connexion from './pages/Connexion/Connexion';

import Home from './pages/Home/Home';


import Setting from './pages/Setting/Setting';

import Error from './components/Error/Error';
 

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
        <Route path="/Error">
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)