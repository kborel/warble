import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Site from './Site';
import Signup from './Signup';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Site>
          <Route exact path = '/' component={Home} />
          <Route path='/signup' component={Signup}/>
        </Site>
      </Router>
    );
  }
}

export default App;
