import { CONSTANTS } from '../actions/dataActions'

const initialState = {
  allRealtors: null,
  errorRealtors: null,
  fetching: false,
  currentRealtor: {
    id: null,
    messages: null,
    fetching: false,
    errorCurrentRealtor: null
  }
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
    case CONSTANTS.MESSAGES_REQUEST:
      return {
        ...state,
        currentRealtor: {
          fetching: true
        }
      }
    case CONSTANTS.MESSAGES_SUCCESS:
      return {
        ...state,
        fetching: false,
        currentRealtor: {
          messages: action.results
        }
      }
    case CONSTANTS.MESSAGES_FAILURE:
      return {
        ...state,
        currentRealtor: {
          fetching: true
        }
      }
    default:
      return state
  }
}

export default reducer
