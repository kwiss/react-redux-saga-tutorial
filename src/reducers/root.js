import { combineReducers } from 'redux'

import somethingReducer from './something'
import initReducer from './init'

export default combineReducers({
  initialReducer: initReducer,
  something: somethingReducer
})
