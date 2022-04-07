import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Connexion from './pages/Connexion/Connexion';

import Home from './pages/Home/Home';

import Contacted from './pages/Contacted/Contacted';

import Forums1 from './pages/Forums/Forums_1';
import Forums2 from './pages/Forums/Forums_2';

import Message1 from './pages/Message/Send_1';
import Message2 from './pages/Message/Send_2';

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
        <Route path="/Contacted">
          <Contacted />
        </Route>
        <Route path="/Forums1">
          <Forums1 />
        </Route>
        <Route path="/Forums2">
          <Forums2 />
        </Route>
        <Route path="/Message1">
          <Message1 />
        </Route>
        <Route path="/Message2">
          <Message2 />
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