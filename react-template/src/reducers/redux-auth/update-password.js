import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';
import * as A from '../../actions/redux-auth/update-password';
import { SET_ENDPOINT_KEYS } from '../../actions/redux-auth/configure';
import {REHYDRATE} from 'redux-persist/constants';

const initialState = {
  loading: false,
  errors: {},
  form: {}
};

export default createReducer(Immutable.fromJS({}), {
  [SET_ENDPOINT_KEYS]: (state, {endpoints}) => state.merge(endpoints.reduce((coll, k) => {
    coll[k] = Immutable.fromJS(initialState);
    return coll;
  }, {})),

  [REHYDRATE]: (state, {endpoint}) => state.merge({
    [endpoint]: initialState
  }),

  [A.UPDATE_PASSWORD_START]: (state, {endpoint}) => state.setIn([endpoint, 'loading'], true),

  [A.UPDATE_PASSWORD_COMPLETE]: (state, {endpoint}) => state.merge({
    [endpoint]: initialState
  }),

  [A.UPDATE_PASSWORD_ERROR]: (state, {endpoint, errors}) => state.mergeDeep({
    [endpoint]: {
      loading: false,
      errors
    }
  }),

  [A.UPDATE_PASSWORD_FORM_UPDATE]: (state, {endpoint, key, value}) => {
    return state.mergeDeep({
      [endpoint]: {
        form: {
          [key]: value
        }
      }
    });
  }
});
