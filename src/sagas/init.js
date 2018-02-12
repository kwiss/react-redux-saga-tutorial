import { put, call, select } from 'redux-saga/effects'

import * as actions from '../constants/actionTypes'

export function* initPage(action) {
  console.log('3.1: Just after we pass in the initPage saga')
  console.log('3.2: we call DO_SOMETHING in that saga so it dispatch that action')
  yield put({ type: actions.DO_SOMETHING })
  console.log('5: we call GET_SOMETHING.REQUEST in that saga so it also dispatch that action')
  yield put({ type: actions.GET_SOMETHING.REQUEST })
}
