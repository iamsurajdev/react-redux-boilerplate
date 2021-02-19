import { takeEvery } from "redux-saga/effects";
import * as actions from "../actionTypes";

const helper = () => {
  // here you can make api calls and other async calls
  console.log("saga called for " + actions.INCREASE_COUNTER);
};

export function* testSaga() {
  yield takeEvery(actions.INCREASE_COUNTER, helper);
}
