const getManager = state => state.managerReducer.manager;

const isFetching = state => state.managerReducer.fetching;

export default {
  getManager,
  isFetching,
};
