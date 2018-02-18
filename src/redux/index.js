/* External Dependencies */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { createEpicMiddleware } from 'redux-observable';

/* Internal Dependencies */
import actionLifeCycle from './middlewares/actionLifeCycle';
import reducers from './reducers';
import rootEpic from './epics';

class ReduxService {
  constructor() {
    const reducer = combineReducers({
      ...reducers,
      form: formReducer,
    });
    const epicMiddleware = createEpicMiddleware(rootEpic);

    this.store = createStore(
      reducer,
      applyMiddleware(
        actionLifeCycle(),
        epicMiddleware,
        // require('redux-logger').logger,
      ),
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
