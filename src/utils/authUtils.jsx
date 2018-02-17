/* External dependencies */
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

/* Internal dependencies */
import selectors from '../redux/selectors';

const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/signin',
  allowRedirectBack: false,
  authenticatedSelector: state => !selectors.managerSelector.getManager(state).isEmpty(),
  wrapperDisplayName: 'UserIsAuthenticated',
});

export default {
  userIsAuthenticated,
};
