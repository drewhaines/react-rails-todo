// external libraries
import React, {Component} from 'react';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {configure} from './actions/redux-auth/configure';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// containers
import Home from './containers/Home';
import AcceptInvite from './containers/AcceptInvite';
import GlobalComponents from './containers/GlobalComponents';
import SignUp from './containers/redux-auth/EmailSignUpForm';
// components
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import Loading from './components/Loading';
// reducers
import Reducers from './reducers/Index';
//
import 'react-notifications/lib/notifications.css';
import './styles/App.css';

// define the api endpoint url
let apiUrl = 'http://localhost:5000';

// create the redux store
const store = createStore(
  Reducers,
  compose(
    applyMiddleware(thunk, logger),
    autoRehydrate()
  )
);

// use this to clear the redux store
// persistStore(store).purge();


class App extends Component {
  constructor() {
    super();
    this.state = {rehydrated: false};
  }

  componentWillMount() {
    // persist and reload redux store on browser refresh
    persistStore(store, {
      transforms: [immutableTransform({
        whitelist: ['auth']
      })]
    }, () => {
      // config redux-auth
      store.dispatch(configure(
        [
          {
            default: {
              apiUrl: apiUrl,
            }
          }
        ], {
          serverSideRendering: false,
          storage: 'localStorage',
          cleanSession: false,
          clientOnly: true
        },
        this
      ));
    });
  }

  render() {
    // show splash page until store is loaded
    if (!this.state.rehydrated) {
      return (<Loading />);
    }
    // once the store is loaded, load the rest of the app
    return (
      <Provider store={store} key="provider" >
        <MuiThemeProvider>
          <div>
            <GlobalComponents />
            <BrowserRouter>
              <div>
                <Route path="/login" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/password/reset" component={ResetPassword} />
                <Route path="/accept-invite" component={AcceptInvite} />
                <AuthenticatedRoute exact path="/" component={Home} store={store} />
              </div>
            </BrowserRouter>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
