import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Cookies from 'universal-cookie';
import './index.css';
import App from './Components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import { LOGIN_SUCCESS } from './Actions/authActions';

const cookies = new Cookies();

if (cookies.get('token')) {
  store.dispatch({ type: LOGIN_SUCCESS });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

if(module.hot) {
  module.hot.accept('./Components/App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
      , document.getElementById('root'));
  })
}

registerServiceWorker();
