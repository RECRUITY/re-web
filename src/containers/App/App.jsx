/* External dependencies */
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

/* Internal dependencies */
import SignIn from '../SignIn';
import SignUp from '../SignUp';

const App = () => (
  <Router>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </Router>
);

export default App;
