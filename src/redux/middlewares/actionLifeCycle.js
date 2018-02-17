/* External dependencies */
import Immutable from 'immutable';

export default () => {
  let pendding = Immutable.Map();

  const actionLifeCycle = () => next => (action) => {
    const ret = (() => {
      if (action.uuid && action.meta && action.meta.usePromise) {
        return {
          ...action,
          promise: new Promise((resolve, reject) => {
            const { lifecycle } = action.meta;
            pendding = pendding.setIn([action.uuid, lifecycle.resolve], resolve);
            pendding = pendding.setIn([action.uuid, lifecycle.reject], reject);
          }),
        };
      }
      return action;
    })();

    if (action.uuid && pendding.hasIn([action.uuid, action.type])) {
      const resolveOrReject = pendding.getIn([action.uuid, action.type]);
      pendding = pendding.delete(action.uuid);
      resolveOrReject(action);
    }

    return next(ret);
  };

  actionLifeCycle.getPenddingMap = () => pendding;

  return actionLifeCycle;
};
