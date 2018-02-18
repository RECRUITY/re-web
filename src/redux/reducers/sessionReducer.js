/* Internal dependencies */
import AT from '../../constants/ActionTypes';
import Session from '../../models/Session';

const initState = {
  session: new Session(),
};

export default (state = initState, action) => {
  switch (action.type) {
    case AT.REQUEST_GET_ME_SUCCESS:
    case AT.REQUEST_SIGN_IN_SUCCESS:
      return {
        ...state,
        session: new Session(action.payload.session),
      };

    default:
      return state;
  }
};
