import Immutable from 'seamless-immutable'
import * as ActionsTypes from '../constants/actionTypes'

const initialState = Immutable({
  something: false,
  data: []
})

const SomethingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.DO_SOMETHING:
      console.log('4: similary DO_SOMETHING action is catch in the coresponding reducer')
      return {
        ...state,
        something: true
      }
    case ActionsTypes.GET_SOMETHING.REQUEST:
      console.log('6.1: GET_SOMETHING action is catch in the coresponding reducer')
      return {
        ...state,
        isFetching: true
      }
    case ActionsTypes.GET_SOMETHING.ERROR:
      return {
        ...state,
        isFetching: false
      }
    case ActionsTypes.GET_SOMETHING.SUCCESS:
      return {
        ...state,
        data: action.response
      }
    default:
      return state
  }
}

export default SomethingReducer
