import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Site from './Site';
import Signup from './Signup';
import Home from './Home';

const App = () =>
  (
    <Router>
      <Site>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
      </Site>
    </Router>
  );

export default App;
