import * as actions from '../constants/actionTypes'

function action(type, payload = {}) {
  return { type, ...payload }
}

export const initPage = () => action(actions.INIT_PAGE)

//
//two types of action are possible
//

// simple action
export const doSomething = () => action(actions.DO_SOMETHING)

// api action with
export const getSomething = {
  request: payload => action(actions.GET_SOMETHING.REQUEST, { payload }),
  success: payload => action(actions.GET_SOMETHING.SUCCESS, { payload }),
  failure: payload => action(actions.GET_SOMETHING.FAILURE, { payload })
}
