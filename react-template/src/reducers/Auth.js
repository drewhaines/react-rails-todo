import authentication from './redux-auth/authenticate';
import configure from './redux-auth/configure';
import user from './redux-auth/user';
import ui from './redux-auth/ui';
import emailSignIn from './redux-auth/email-sign-in';
import emailSignUp from './redux-auth/email-sign-up';
import oAuthSignIn from './redux-auth/oauth-sign-in';
import requestPasswordReset from './redux-auth/request-password-reset';
import updatePassword from './redux-auth/update-password';
import updatePasswordModal from './redux-auth/update-password-modal';
import server from './redux-auth/server';
import signOut from './redux-auth/sign-out';
import destroyAccount from './redux-auth/destroy-account';
import {combineReducers} from 'redux-immutablejs';

/* redux-auth reducers */
export const authStateReducer = combineReducers({
  configure,
  emailSignIn,
  emailSignUp,
  signOut,
  authentication,
  requestPasswordReset,
  oAuthSignIn,
  updatePassword,
  updatePasswordModal,
  destroyAccount,
  server,
  ui,
  user
});
