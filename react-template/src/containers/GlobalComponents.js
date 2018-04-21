import React from 'react';
import {connect} from 'react-redux';
import AuthGlobals from '../containers/redux-auth/AuthGlobals';

class GlobalComponents extends React.Component {
  render() {
    return (
      <div>
        <AuthGlobals />
      </div>
    );
  }
}

export default connect()(GlobalComponents);
