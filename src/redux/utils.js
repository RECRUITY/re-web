/* External dependencies */
import uuidv4 from 'uuid/v4';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

export const actionCreator = (requestType, options = {}) => (payload = {}, meta = {}) => ({
  uuid: uuidv4(),
  type: requestType,
  payload,
  meta: {
    ...meta,
    usePromise: options.usePromise || false,
    lifecycle: {
      resolve: `${requestType}_SUCCESS`,
      reject: `${requestType}_ERROR`,
    },
  },
});

export const apiToObservable = (action, api, ...args) => (
  fromPromise(api(...args))
    .map(payload => ({
      uuid: action.uuid,
      type: action.meta.lifecycle.resolve,
      payload,
    }))
    .catch(payload => Observable.of({
      uuid: action.uuid,
      type: action.meta.lifecycle.reject,
      payload,
    }))
);
