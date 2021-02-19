import { all } from "redux-saga/effects";

import { testSaga } from "./testSaga";

export default function* rootSaga() {
  yield all([
    // you can insert other sagas here
    testSaga(),
  ]);
}
