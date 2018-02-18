/* External dependencies */
import { createSelector } from 'reselect';

const App = createSelector(
  state => state.managerReducer.fetching,
  (...args) => args.reduce((prev, cur) => prev || cur, false),
);

export default {
  App,
};
