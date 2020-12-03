import { CONSTANTS } from '../actions/dataActions'

const initialState = {
  realtorMessages: {
    isFetching: false,
    messages: [],
    errorMessage: '',
    pageIndex: 1,
    hasMore: true
  },
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
    case CONSTANTS.MESSAGES_REQUEST:
      return {
        ...state,
        realtorMessages: {
          ...state.realtorMessages,
          isFetching: true,
          pageIndex: action.pageIndex,
          hasMore: true
        }
      }
    case CONSTANTS.MESSAGES_SUCCESS:
      return {
        ...state,
        realtorMessages: {
          ...state.realtorMessages,
          isFetching: false,
          messages: [...state.realtorMessages.messages, ...action.messages],
          hasMore: action.hasMore
        }
      }
    case CONSTANTS.MESSAGES_FAILURE:
      return {
        ...state,
        realtorMessages: {
          isFetching: false,
          errorMessage: action.errorMessage,
          hasMore: false
        }
      }
    default:
      return state
  }
}

export default reducer
