import Immutable from 'seamless-immutable'
import * as ActionsTypes from '../constants/actionTypes'

const initialState = Immutable({
  exempleData: 'initial Data'
})

const InitReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.INIT_PAGE:
      console.log(
        '2: We pass first in the reducer catching the action INIT_PAGE via a switch, here we write some data as an exemple'
      )
      return {
        ...state,
        exempleData: 'modifiedData'
      }
    default:
      return state
  }
}

export default InitReducer
