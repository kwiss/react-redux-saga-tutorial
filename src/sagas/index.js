import { cancel, spawn, take, takeLatest, takeEvery, fork, all, actionChannel } from 'redux-saga/effects'
import * as actions from '../constants/actionTypes'

import * as pageRoutines from './init'
import * as somethingRoutines from './something'

function* watchInitPage() {
  yield takeEvery(actions.INIT_PAGE, pageRoutines.initPage)
}

function* watchGetSomething() {
  yield takeEvery(actions.GET_SOMETHING.REQUEST, somethingRoutines.getSomething)
}

export default function* rootSaga() {
  yield [fork(watchInitPage), fork(watchGetSomething)]
}
