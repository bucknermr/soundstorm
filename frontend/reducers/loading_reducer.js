
const defaultState = {
  loading: false
};

const loadingReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    default:
      return state;
  }
};

export default loadingReducer;
