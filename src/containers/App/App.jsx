/* External dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Internal dependencies */
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import CreateGroup from '../CreateGroup';
import Group from '../Group';
import actions from '../../redux/actions';
import withPreLoader from '../../decorators/withPreLoader';
import authUtils from '../../utils/authUtils';
import selectors from '../../redux/selectors';
import SessionModel from '../../models/Session';

const initializer = (props, nextProps, dispatch) => {
  if (!props) {
    dispatch(actions.managerActions.getMe());
    return true;
  }
  return false;
};

const mapStateToProps = state => ({
  session: selectors.sessionSelectors.getSession(state),
});

@withPreLoader({
  initializer,
  isLoading: selectors.loadingSelectors.App,
})
@connect(mapStateToProps)
class App extends React.Component {
  static propTypes = {
    session: PropTypes.instanceOf(SessionModel).isRequired,
  }

  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to={`/groups/${this.props.session.id || 'new'}`} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/groups/new" component={authUtils.isNotJoinedGroup(authUtils.isAuthenticated(CreateGroup))} />
          <Route path="/groups/:id" component={authUtils.isJoinedGroup(authUtils.isAuthenticated(Group))} />
        </Switch>
      </Router>
    );
  }
}

export default App;
