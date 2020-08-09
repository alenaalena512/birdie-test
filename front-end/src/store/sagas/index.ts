import { put, takeLatest, all } from 'redux-saga/effects';

function* getEvents(action: any) {
  const json = yield fetch(`http://localhost:8000/events/?id=${action.payload}`)
    .then((response: any) => response.json())
    .then((data: any) => data.map((d: any) => JSON.parse(d)))
    .catch();
  yield put({ type: 'FETCH_COMPLETED', payload: json });
}

function* getCareRecipients() {
  const json = yield fetch('http://localhost:8000/patients')
    .then((response: any) => response.json());
  yield put({ type: 'FETCH_RECIPIENTS_COMPLETED', payload: json });
}

function* actionWatcher() {
  yield takeLatest('FETCH_EVENTS', getEvents);
}

function* recipientsWatcher() {
  yield takeLatest('FETCH_CARE_RECIPIENTS', getCareRecipients);
}

function* initSaga() {
  yield all([
    actionWatcher(),
    recipientsWatcher()
  ]);
}

export default initSaga;