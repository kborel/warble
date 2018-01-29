import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../Reducers/authReducer';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
            pathname: '/signup',
            state: { from: props.location },
          }}
        />
      )
    )}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
