/* External Dependencies */
import { createStore, applyMiddleware } from 'redux';

/* Internal Dependencies */
import actionLifeCycle from './middlewares/actionLifeCycle';

class ReduxService {
  constructor() {
    this.store = createStore(applyMiddleware(actionLifeCycle()));
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
