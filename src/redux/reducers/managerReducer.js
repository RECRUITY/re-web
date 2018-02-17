/* Internal dependencies */
import AT from '../../constants/ActionTypes';
import Manager from '../../models/Manager';

const initState = {
  fetching: false,
  hasError: false,
  manager: new Manager(),
};

export default (state = initState, action) => {
  switch (action.type) {
    case AT.REQUEST_GET_ME:
      return {
        ...state,
        fetching: true,
        hasError: false,
      };

    case AT.REQUEST_GET_ME_SUCCESS:
      return {
        ...state,
        fetching: false,
        manager: new Manager(action.payload.manager),
      };

    case AT.REQUEST_GET_ME_ERROR:
      return {
        ...state,
        fetching: false,
        hasError: true,
      };

    default:
      return state;
  }
};
