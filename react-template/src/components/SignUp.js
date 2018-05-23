import React from 'react';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import EmailSignUpForm from '../containers/redux-auth/EmailSignUpForm';

class SignUp extends React.Component {
  render() {
    return (
      <div className="signup_wrap">
          <div className="signup_form">
            <Paper>
              <div className="signup_hdr">
              </div>
              <div className="signup_pad">
                <h2>Sign up</h2>
                <EmailSignUpForm next={() => this.props.history.push('/')} />
              </div>
            </Paper>
          </div>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <div className='signup_link text-center'>Sign In</div>
        </Link>
      </div>
    );
  }
}

export default SignUp;
