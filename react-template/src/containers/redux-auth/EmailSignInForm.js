import React from 'react';
import PropTypes from 'prop-types';
import ButtonLoader from './ButtonLoader';
import Input from './Input';
import {emailSignInFormUpdate, emailSignIn} from '../../actions/redux-auth/email-sign-in';
import {connect} from 'react-redux';

class EmailSignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoFilled: false
    };
  }

  static propTypes = {
    endpoint: PropTypes.string,
    next: PropTypes.func,
    inputProps: PropTypes.shape({
      email: PropTypes.object,
      password: PropTypes.object,
      submit: PropTypes.object
    })
  };

  static defaultProps = {
    next: () => {},
    inputProps: {
      email: {},
      password: {},
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
    this.props.dispatch(emailSignInFormUpdate(this.getEndpoint(), key, val));
  }

  handleSubmit (event) {
    event.preventDefault();
    let formData = this.props.auth.getIn(['emailSignIn', this.getEndpoint(), 'form']).toJS();
    this.props.dispatch(emailSignIn(formData, this.getEndpoint()))
      .then(this.props.next)
      .catch(() => {});
  }

  componentDidMount() {
    setTimeout(() => {
      const email = this.props.auth.getIn([
        'emailSignIn',
        this.getEndpoint(),
        'form', 'email'
      ]);
      if (email) {
        this.setState({autoFilled: true});
      }
    }, 600);
  }

  render () {
    let disabled = (
      this.props.auth.getIn(['user', 'isSignedIn']) ||
      this.props.auth.getIn(['emailSignIn', this.getEndpoint(), 'loading'])
    );

    return (
      <form className='redux-auth email-sign-in-form'
        style={{clear: 'both', overflow: 'hidden'}}
        onSubmit={this.handleSubmit.bind(this)}>
        <Input type='text'
          className='email_sign_in_email'
          name='email'
          ref='emailSignInEmail'
          floatingLabelText='Email'
          disabled={disabled}
          value={this.props.auth.getIn(['emailSignIn', this.getEndpoint(), 'form', 'email'])}
          errors={this.props.auth.getIn(['emailSignIn', this.getEndpoint(), 'errors', 'email'])}
          onChange={this.handleInput.bind(this, 'email')}
          underlineFocusStyle={{borderColor: 'white'}}
          {...this.props.inputProps.email} />

        <Input type='password'
          floatingLabelText='Password'
          className='email_sign_in_password'
          name='password'
          disabled={disabled}
          value={this.props.auth.getIn(['emailSignIn', this.getEndpoint(), 'form', 'password'])}
          errors={this.props.auth.getIn(['emailSignIn', this.getEndpoint(), 'errors', 'password'])}
          onChange={this.handleInput.bind(this, 'password')}
          floatingLabelFixed={this.state.autoFilled}
          underlineFocusStyle={{borderColor: 'white'}}
          {...this.props.inputProps.password} />

        <ButtonLoader loading={this.props.auth.getIn(['emailSignIn', 'loading'])}
          type='submit'
          style={{float: 'right', marginTop: 25, textTransform: 'none'}}
          labelColor='#59AFEA'
          labelStyle={{textTransform: 'none', fontSize: 18, fontWeight: 300}}
          className='cal_white_button'
          disabled={disabled}
          onClick={this.handleSubmit.bind(this)}
          {...this.props.inputProps.submit}>
          Sign in
        </ButtonLoader>
      </form>
    );
  }
}

export default connect(({auth}) => ({auth}))(EmailSignInForm);
