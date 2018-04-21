import React from 'react';
import * as Colors from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import AlertError from 'material-ui/svg-icons/alert/error';
import Immutable from 'immutable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AuthInput extends React.Component {
  static defaultProps = {
    label: '',
    value: '',
    errors: Immutable.fromJS([])
  };

  handleInput(ev) {
    ev.preventDefault();
    this.props.onChange(ev.target.value);
  }

  renderErrorList() {
    if (this.props.errors && this.props.errors.length) {
      return (
        <div className='auth-error-message'>
          {this.props.errors.map((err, i) => {
            return (
              <p className='inline-error-item'
                style={{paddingLeft: '16px', position: 'relative', marginBottom: '5px'}}
                key={i}>
                <AlertError
                  viewBox='0 0 50 50'
                  color={Colors.red400}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0}} />
                {err}
              </p>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <TextField
          fullWidth={true}
          id={this.props.className}
          underlineFocusStyle={{borderColor: '#8ac1e6'}}
          {...this.props}
          errorText={this.renderErrorList()}
          onChange={this.handleInput.bind(this)} />
      </MuiThemeProvider>
    );
  }
}

export default AuthInput;
