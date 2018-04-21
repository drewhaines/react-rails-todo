import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export function isLoggedIn(store) {
  const isSignedIn = store.getState().auth.getIn(['user', 'isSignedIn']);

  if (isSignedIn) {
    return true;
  } else {
    return false;
  }
}

const AuthenticatedRoute = ( {component: Component, store, ...rest} ) => (
  <Route {...rest} render={(props) => (
    isLoggedIn(store) ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
    )
  )}/>
);

export default AuthenticatedRoute;
