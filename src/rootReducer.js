const initialState = { value: 0 };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, value: state.value + 1 };
    case 'decrement':
      return { ...state, value: state.value - 1 };
    case 'incrementByAmount':
      return { ...state, value: state.value + action.payload };
    default:
      return state;
  }
};

export default rootReducer;
