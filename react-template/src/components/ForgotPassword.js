import React from 'react';
import {Link} from 'react-router-dom';
import RequestPasswordResetForm from '../containers/redux-auth/RequestPasswordResetForm';

class ForgotPassword extends React.Component {
  render() {
    return (
      <div className="signin_wrap">
        <div className="signin_form">
          <div className="signin_hdr">
          </div>
          <div className="signin_pad">
            <h2>Forgot Password?</h2>
            <p className='signin_text'>
              Enter your email and we'll send you a link to reset your password.
            </p>
            <RequestPasswordResetForm next={() => this.props.history.push('/login')} />
          </div>
        </div>
        <Link to="/login">
          <div className='login_link'>Return to Sign in</div>
        </Link>
      </div>
    );
  }
}

export default ForgotPassword;
