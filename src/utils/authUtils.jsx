/* External dependencies */
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

/* Internal dependencies */
import selectors from '../redux/selectors';

const isAuthenticated = connectedRouterRedirect({
  redirectPath: '/signin',
  allowRedirectBack: false,
  authenticatedSelector: state => !selectors.managerSelectors.getManager(state).isEmpty(),
  wrapperDisplayName: 'IsAuthenticated',
});

const isJoinedGroup = connectedRouterRedirect({
  redirectPath: '/signin',
  allowRedirectBack: false,
  authenticatedSelector: state => !selectors.sessionSelectors.getSession(state).isEmpty(),
  wrapperDisplayName: 'IsJoinedGroup',
});

const isNotJoinedGroup = connectedRouterRedirect({
  redirectPath: state => `/groups/${selectors.sessionSelectors.getSession(state).groupId}`,
  allowRedirectBack: false,
  authenticatedSelector: state => selectors.sessionSelectors.getSession(state).isEmpty(),
  wrapperDisplayName: 'IsJoinedGroup',
});

export default {
  isAuthenticated,
  isJoinedGroup,
  isNotJoinedGroup,
};
