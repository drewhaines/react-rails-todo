import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Spinner from 'react-spinner-material';

class Loading extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="loading_bg">
          <Spinner
            className='spinner'
            size={100}
            spinnerColor={'#FFF'}
            spinnerWidth={2}
            visible={true} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Loading;
