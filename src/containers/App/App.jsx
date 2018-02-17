/* External dependencies */
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

/* Internal dependencies */
import SignIn from '../SignIn';

const App = () => (
  <Router>
    <Switch>
      <Route path="/signin" component={SignIn} />
    </Switch>
  </Router>
);

export default App;
