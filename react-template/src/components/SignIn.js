import React from 'react';
import {Link} from 'react-router-dom';
import EmailSignInForm from '../containers/redux-auth/EmailSignInForm';

class SignIn extends React.Component {
  render() {
    return (
      <div className="signin_wrap">
        <div className="signin_form">
          <div className="signin_hdr">
          </div>
          <div className="signin_pad">
            <h2>Sign in</h2>
            <EmailSignInForm next={() => this.props.history.push('/')} />
          </div>
        </div>
        <Link to="/forgot-password">
          <div className='login_link'>Forgot Password</div>
        </Link>
        <Link to="/sign-up">
          <div className='login_link'>Sign Up</div>
        </Link>
      </div>
    );
  }
}

export default SignIn;
