/* External dependencies */
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

/* Internal dependencies */
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import actions from '../../redux/actions';
import withPreLoader from '../../decorators/withPreLoader';

const initializer = (props, nextProps, dispatch) => {
  if (!props) {
    dispatch(actions.managerActions.getMe());
  }
};

@withPreLoader({
  initializer,
})
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
