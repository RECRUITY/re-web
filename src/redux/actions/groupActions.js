/* Internal dependencies */
import { actionCreator } from '../utils';
import AT from '../../constants/ActionTypes';

export default {
  createGroup: actionCreator(AT.REQUEST_CREATE_GROUP, { usePromise: true }),
};
