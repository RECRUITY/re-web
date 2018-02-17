/* External dependencies */
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

/* Internal dependencies */
import SignIn from '../SignIn';

const App = () => (
  <Router>
    <Switch>
      <Route path="/sign_in" component={SignIn} />
    </Switch>
  </Router>
);

export default App;
