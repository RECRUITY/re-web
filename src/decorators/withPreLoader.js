/* External dependencies */
import { createPreLoader } from 'redux-preloader';

/* Internal dependencies */
import selectors from '../redux/selectors';

export default createPreLoader({
  injectToProps: {
    fetchingManager: selectors.managerSelector.isFetching,
  },
});
