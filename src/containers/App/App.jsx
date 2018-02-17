/* External dependencies */
import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

/* Internal dependencies */
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Group from '../Group';
import actions from '../../redux/actions';
import withPreLoader from '../../decorators/withPreLoader';
import authUtils from '../../utils/authUtils';
import selectors from '../../redux/selectors';

const initializer = (props, nextProps, dispatch) => {
  if (!props) {
    dispatch(actions.managerActions.getMe());
    return true;
  }
  return false;
};

@withPreLoader({
  initializer,
  isLoading: selectors.loadingSelector.App,
})
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/group" />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/group" component={authUtils.userIsAuthenticated(Group)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
