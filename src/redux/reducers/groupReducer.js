/* Internal dependencies */
import AT from '../../constants/ActionTypes';
import Group from '../../models/Group';

const initState = {
  group: new Group(),
};

export default (state = initState, action) => {
  switch (action.type) {
    case AT.REQUEST_GET_ME:
    case AT.REQUEST_SIGN_IN:
      return {
        ...state,
        group: new Group(action.payload.group),
      };

    default:
      return state;
  }
};
