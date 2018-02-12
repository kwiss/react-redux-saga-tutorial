const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const INIT_PAGE = 'INIT_PAGE'

//
//two types of action are possible
//

// simple action
export const DO_SOMETHING = 'DO_SOMETHING'

// api action with a get
export const GET_SOMETHING = createRequestTypes('GET_SOMETHING')
