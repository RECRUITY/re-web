/* External dependencies */
import { combineEpics } from 'redux-observable';

/* Internal Dependencies */
import ActionTypes from '../../constants/ActionTypes';
import * as groupAPI from '../../api/groupAPI';
import { apiToObservable } from '../utils';

export const createGroupEpic = action$ =>
  action$.ofType(ActionTypes.REQUEST_CREATE_GROUP)
    .switchMap((action) => {
      const { group } = action.payload;
      return apiToObservable(action, groupAPI.create, group);
    });

export default combineEpics(createGroupEpic);
