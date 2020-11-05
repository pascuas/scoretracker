import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Favorites from './components/favorites/Favorites';

import TeamState from './context/team/TeamState';
import AuthState from './context/auth/AuthState';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <TeamState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/favorites' component={Favorites} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </TeamState>
    </AuthState>
  );
}

export default App;
