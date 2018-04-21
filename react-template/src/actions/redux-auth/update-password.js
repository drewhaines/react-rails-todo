import {getPasswordUpdateUrl}  from '../../utils/session-storage';
import {parseEmptyResponse} from '../../utils/handle-fetch-response';
import fetch from '../../utils/fetch';
import extend from 'extend';

export const UPDATE_PASSWORD_START       = 'UPDATE_PASSWORD_START';
export const UPDATE_PASSWORD_COMPLETE    = 'UPDATE_PASSWORD_COMPLETE';
export const UPDATE_PASSWORD_ERROR       = 'UPDATE_PASSWORD_ERROR';
export const UPDATE_PASSWORD_FORM_UPDATE = 'UPDATE_PASSWORD_FORM_UPDATE';

export function updatePasswordFormUpdate(endpoint, key, value) {
  return {type: UPDATE_PASSWORD_FORM_UPDATE, endpoint, key, value};
}
export function updatePasswordStart(endpoint) {
  return {type: UPDATE_PASSWORD_START, endpoint};
}
export function updatePasswordComplete(endpoint, user) {
  return {type: UPDATE_PASSWORD_COMPLETE, endpoint, user};
}
export function updatePasswordError(endpoint, errors) {
  return {type: UPDATE_PASSWORD_ERROR, endpoint, errors};
}
export function updatePassword(body, endpoint, params) {
  return (dispatch) => {
    dispatch(updatePasswordStart(endpoint));
    delete body.passwordConfirmation;
    params.token = params.token.split(' ').join('+');
    return fetch(getPasswordUpdateUrl(endpoint), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'put',
      body: JSON.stringify(
        extend(body, {
          token: params.token,
          email: params.email
        }))
    })
      .then(parseEmptyResponse)
      .then(({user}) => {
        dispatch(updatePasswordComplete(endpoint, user));
      })
      .catch((errors) => {
        let newPasswordErrors = [];

        for (let key in errors) {
          if (errors.hasOwnProperty(key)) {
            for (let index in errors[key]) {
              newPasswordErrors.push(errors[key][index]);
            }
          }
        }

        errors = {newPassword: newPasswordErrors, passwordConfirmation: null};
        dispatch(updatePasswordError(endpoint, errors));
        throw errors;
      });
  };
}
