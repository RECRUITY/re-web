/* External dependencies */
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/signin',
  allowRedirectBack: false,
  authenticatedSelector: () => false,
  wrapperDisplayName: 'UserIsAuthenticated',
});

export default {
  userIsAuthenticated,
};
