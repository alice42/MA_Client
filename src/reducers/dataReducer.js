import { CONSTANTS } from '../actions/dataActions'

const initialState = {
  allRealtors: null,
  errorRealtors: null,
  fetching: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.REALTORS_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case CONSTANTS.REALTORS_SUCCESS:
      return {
        ...state,
        allRealtors: action.results,
        fetching: false
      }
    case CONSTANTS.REALTORS_FAILURE:
      return {
        ...state,
        fetching: false
      }
    default:
      return state
  }
}

export default reducer
