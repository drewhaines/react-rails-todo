import React from 'react';
import UpdatePasswordForm from '../containers/redux-auth/UpdatePasswordForm';

class ResetPassword extends React.Component {
  render() {
    return (
      <div className="signin_wrap">
        <div className="signin_form">
          <div className="signin_hdr">
          </div>
          <div className="signin_pad">
            <h2>Reset Password</h2>
            <UpdatePasswordForm next={() => this.props.history.push('/login')} />
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
