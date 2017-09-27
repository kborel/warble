import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/signup' component={Signup}/>
      </Router>
    );
  }
}

export default App;
