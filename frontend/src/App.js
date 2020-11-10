import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Favorites from './components/favorites/Favorites';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

import TeamState from './context/team/TeamState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <TeamState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/favorites' component={Favorites} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </TeamState>
    </AuthState>
  );
}

export default App;
