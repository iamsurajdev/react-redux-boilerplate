import * as actionType from "../actionTypes";
import { updateObject } from "../utility";

const initialState = {
  counter: 0,
  message: null,
};

const increaseCounter = (state, action) => {
  return updateObject(state, {
    counter: action.value + state.counter,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREASE_COUNTER:
      return increaseCounter(state, action);

    default:
      return state;
  }
};

export default reducer;
