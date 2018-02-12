import { put, call, select } from 'redux-saga/effects'
import { API_GET_REQUEST, API_PUT_REQUEST, API_POST_REQUEST } from '../constants/api'
import * as actions from '../constants/actionTypes'
import * as api from '../services/endpoint'

export function* getSomething(action) {
  const payload = API_GET_REQUEST
  console.log('6.2 Here we are GET_SOMETHING.REQUEST saga were we usually call api, lets do that')
  const { response, error } = yield call(api.getSomething, payload)
  if (response) {
    yield put({ type: actions.GET_SOMETHING.SUCCESS, response })
    console.log(response)
    console.log('7. You should see some data above form the api call')
  }
}
