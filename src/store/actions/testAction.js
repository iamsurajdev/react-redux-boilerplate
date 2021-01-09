import * as actionTypes from "../actionTypes";

export const increaseCounter = (value) => {
  return {
    type: actionTypes.INCREASE_COUNTER,
    value,
  };
};
