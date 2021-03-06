/* Internal dependencies */
import { actionCreator } from '../utils';
import AT from '../../constants/ActionTypes';

export default {
  getMe: actionCreator(AT.REQUEST_GET_ME),
  signIn: actionCreator(AT.REQUEST_SIGN_IN, { usePromise: true }),
  signUp: actionCreator(AT.REQUEST_SIGN_UP),
  signOut: actionCreator(AT.REQUEST_SIGN_OUT, { usePromise: true }),
};
