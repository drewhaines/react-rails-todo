import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {emailSignUpFormUpdate, emailSignUp} from '../../actions/redux-auth/email-sign-up';
import ButtonLoader from './ButtonLoader';
import ContentSend from 'material-ui/svg-icons/content/send';
import Input from './Input';

class EmailSignUpForm extends React.Component {
    static propTypes = {
      endpoint: PropTypes.string,
      next: PropTypes.func,
      inputProps: PropTypes.shape({
        role: PropTypes.object,
        first_name: PropTypes.object,
        last_name: PropTypes.object,
        email: PropTypes.object,
        password: PropTypes.object,
        passwordConfirmation: PropTypes.object,
        submit: PropTypes.object
      })
    };

    static defaultProps = {
      next: () => {},
      inputProps: {
        role: {},
        first_name: {},
        last_name: {},
        email: {},
        password: {},
        submit: {}
      }
    };

    getEndpoint() {
      return (
        this.props.endpoint ||
        this.props.auth.getIn(['configure', 'currentEndpointKey']) ||
        this.props.auth.getIn(['configure', 'defaultEndpointKey'])
      );
    }

    handleInput(key, val) {
      this.props.dispatch(emailSignUpFormUpdate(this.getEndpoint(), key, val));
    }

    handleSubmit(event) {
      console.log('@-->handling submit');
      event.preventDefault();
      let formData = this.props.auth.getIn(['emailSignUp', this.getEndpoint(), 'form']).toJS();
      this.props.dispatch(emailSignUp(formData, this.getEndpoint()))
        .then(this.props.next)
        .catch(() => {});
    }

    render() {
      let disabled = (
        this.props.auth.getIn(['emailSignUp', this.getEndpoint(), 'loading'])
      );

      return (
        <form className='redux-auth email-sign-up-form clearfix'
          style={{clear: 'both', overflow: 'hidden'}}
          onSubmit={this.handleSubmit.bind(this)}>

          <Input type='text'
            floatingLabelText='First Name'
            className='email-sign-up-first-name'
            disabled={disabled}
            value={this.props.auth.getIn([
              'emailSignUp',
              this.getEndpoint(),
              'form', 'first_name'])
            }
            errors={this.props.auth.getIn([
              'emailSignUp',
              this.getEndpoint(),
              'errors', 'first_name'])
            }
            onChange={this.handleInput.bind(this, 'first_name')}
            {...this.props.inputProps.first_name} />

          <Input type='text'
            floatingLabelText='Last Name'
            className='email-sign-up-last-name'
            disabled={disabled}
            value={this.props.auth.getIn([
              'emailSignUp',
              this.getEndpoint(),
              'form', 'last_name'])
            }
            errors={this.props.auth.getIn([
              'emailSignUp',
              this.getEndpoint(),
              'errors', 'last_name'])
            }
            onChange={this.handleInput.bind(this, 'last_name')}
            {...this.props.inputProps.last_name} />

          <Input type='text'
            floatingLabelText='Email'
            className='email-sign-up-email'
            disabled={disabled}
            value={this.props.auth.getIn(['emailSignUp', this.getEndpoint(), 'form', 'email'])}
            errors={this.props.auth.getIn(['emailSignUp', this.getEndpoint(), 'errors', 'email'])}
            onChange={this.handleInput.bind(this, 'email')}
            {...this.props.inputProps.email} />

          <Input type='password'
            floatingLabelText='Password'
            className='email-sign-up-password'
            disabled={disabled}
            value={this.props.auth.getIn(['emailSignUp', this.getEndpoint(), 'form', 'password'])}
            errors={this.props.auth.getIn([
              'emailSignUp',
              this.getEndpoint(),
              'errors', 'password'])}
            onChange={this.handleInput.bind(this, 'password')}
            {...this.props.inputProps.password} />

          <Input type='password'
            floatingLabelText='Password Confirmation'
            className='email-sign-up-password-confirmation'
            disabled={disabled}
            value={this.props.auth.getIn(['emailSignUp',
              this.getEndpoint(), 'form', 'password_confirmation'])}
            errors={this.props.auth.getIn(['emailSignUp',
              this.getEndpoint(), 'errors', 'password_confirmation'])}
            onChange={this.handleInput.bind(this, 'password_confirmation')}
            {...this.props.inputProps.passwordConfirmation} />

          <ButtonLoader
            loading={this.props.auth.getIn(['emailSignUp', this.getEndpoint(), 'loading'])}
            type='submit'
            className='email-sign-up-submit'
            primary={true}
            style={{float: 'right'}}
            icon={ContentSend}
            disabled={disabled}
            onClick={this.handleSubmit.bind(this)}
            {...this.props.inputProps.submit}>
            Sign Up
          </ButtonLoader>
        </form>
      );
    }
}

export default connect(({auth}) => ({auth}))(EmailSignUpForm);
