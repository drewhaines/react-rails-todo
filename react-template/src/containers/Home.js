import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <h1>Yay! You're logged in.</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Home);
