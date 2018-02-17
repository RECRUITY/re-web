/* External Dependencies */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

/* Internal Dependencies */
import actionLifeCycle from './middlewares/actionLifeCycle';

class ReduxService {
  constructor() {
    const reducer = combineReducers({
      form: formReducer,
    });

    this.store = createStore(
      reducer,
      applyMiddleware(actionLifeCycle()),
    );
  }

  getStore() {
    return this.store;
  }

  dispatch(action) {
    return this.store.dispatch(action);
  }

  getState() {
    return this.store.getState();
  }
}

export default new ReduxService();
