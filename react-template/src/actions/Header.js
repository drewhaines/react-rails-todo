import * as actionTypes from '../actions/ActionTypes';

export function updateDrawerVisibility(isVisible) {
  return { type: actionTypes.UPDATE_DRAWER_VISIBILITY, isVisible};
}
