import { combineEpics } from 'redux-observable';

/* Internal Dependencies */
import ActionTypes from '../../constants/ActionTypes';
import * as managerAPI from '../../api/managerAPI';
import { apiToObservable } from '../utils';

export const getMeEpic = action$ =>
  action$.ofType(ActionTypes.REQUEST_GET_ME)
    .switchMap(action => apiToObservable(action, managerAPI.getMe));

export const signInEpic = action$ =>
  action$.ofType(ActionTypes.REQUEST_SIGN_IN)
    .switchMap((action) => {
      const { manager } = action.payload;
      return apiToObservable(action, managerAPI.signIn, manager);
    });

export default combineEpics(
  getMeEpic,
  signInEpic,
);
