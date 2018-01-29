import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import NavbarContainer from '../Containers/NavbarContainer';
import PrivateRoute from '../Containers/PrivateRoute';

const App = () =>
  (
    <Router>
      <React.Fragment>
        <NavbarContainer />
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
      </React.Fragment>
    </Router>
  );

export default App;
