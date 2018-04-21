import React from 'react';
import PropTypes from 'prop-types';
import Input from './redux-auth/Input';
import ButtonLoader from './redux-auth/ButtonLoader';
import {
  updatePassword,
  updatePasswordFormUpdate,
  updatePasswordError
} from '../actions/redux-auth/update-password';
import {connect} from 'react-redux';

class AcceptInviteForm extends React.Component {
  static propTypes = {
    next: PropTypes.func,
    endpoint: PropTypes.string,
    inputProps: PropTypes.shape({
      password: PropTypes.object,
      passwordConfirmation: PropTypes.object,
      submit: PropTypes.object
    })
  };

  static defaultProps = {
    next: () => {},
    inputProps: {
      password: {},
      passwordConfirmation: {},
      submit: {}
    }
  };

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(['configure', 'currentEndpointKey']) ||
      this.props.auth.getIn(['configure', 'defaultEndpointKey'])
    );
  }

  handleInput (key, val) {
    this.props.dispatch(updatePasswordFormUpdate(this.getEndpoint(), key, val));
  }

  validateForm(formData) {
    let isValid = true;
    if (formData.newPassword != formData.passwordConfirmation) {
      this.props.dispatch(updatePasswordError(
        this.getEndpoint(),
        {passwordConfirmation: ['does not match password.']}
      ));
      isValid = false;
    }

    if (formData.newPassword == '' || formData.newPassword == null) {
      this.props.dispatch(updatePasswordError(
        this.getEndpoint(),
        {newPassword: ['cannot be blank.']}
      ));
      isValid = false;
    }

    return isValid;
  }

  handleSubmit (ev) {
    ev.preventDefault();
    if (this.props.token) {
      const queryString = require('query-string');
      let params = queryString.parse(window.location.search);
      let formData = this.props.auth.getIn(['updatePassword', this.getEndpoint(), 'form']).toJS();
      if (this.validateForm(formData)) {
        this.props.dispatch(updatePassword(formData, this.getEndpoint(), params))
          .then(this.props.next)
          .catch(() => {});
      }
    } else {
      this.props.next();
    }
  }

  render () {
    let endpoint = this.getEndpoint();
    let loading = this.props.auth.getIn(['updatePassword', endpoint, 'loading']);
    let disabled = loading;
    let attributes = this.props.auth.getIn(['updatePassword', endpoint, 'form']).toJS();
    let errors = this.props.auth.getIn(['updatePassword', endpoint, 'errors']);

    return (
      <form className='redux-auth update-password-form clearfix'>
        { this.props.token &&
          <div>
            <Input
              type='password'
              floatingLabelText='Password'
              disabled={disabled}
              className='update_password_password'
              value={attributes.newPassword}
              errors={errors && errors.toJS().newPassword}
              onChange={this.handleInput.bind(this, 'newPassword')}
              underlineFocusStyle={{borderColor: 'white'}}
              {...this.props.inputProps.newPassword} />
            <Input
              type='password'
              floatingLabelText='Password Confirmation'
              className='update_password_password_confirmation'
              disabled={disabled}
              value={attributes.passwordConfirmation}
              errors={errors && errors.toJS().passwordConfirmation}
              onChange={this.handleInput.bind(this, 'passwordConfirmation')}
              underlineFocusStyle={{borderColor: 'white'}}
              {...this.props.inputProps.passwordConfirmation} />
            {
              ( attributes.newPassword &&
                attributes.newPassword == attributes.passwordConfirmation ) &&
              <span className='pull-right'>
                <i className="fa fa-check fa-2x" aria-hidden="true"></i>
              </span>
            }
          </div>
        }
        <br/>
        <br/>
        <br/>
        <ButtonLoader
          loading={loading}
          type='submit'
          style={{float: 'right', marginTop: 25, textTransform: 'none'}}
          labelColor='#59AFEA'
          labelStyle={{textTransform: 'none', fontSize: 18, fontWeight: 300}}
          className='cal_white_button'
          disabled={disabled}
          onClick={this.handleSubmit.bind(this)}
          {...this.props.inputProps.submit}>
          Get Started
        </ButtonLoader>
      </form>
    );
  }
}

export default connect(({auth}) => ({auth}))(AcceptInviteForm);
