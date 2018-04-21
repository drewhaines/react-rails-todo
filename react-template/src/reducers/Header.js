import * as actionTypes from '../actions/ActionTypes';

const initialState = {
  isDrawerOpen: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_DRAWER_VISIBILITY:
      return ({
        ...state,
        isDrawerOpen: action.isVisible
      });
    default:
      return state;
  }
}
