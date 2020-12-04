import { CONSTANTS } from '../actions/dataActions'

const initialState = {
  message: {
    isFetching: false,
    errorMessage: ''
  },
  realtorMessages: {
    isFetching: false,
    messages: [],
    errorMessages: '',
    pageIndex: 1,
    hasMore: true
  },
  realtor: {
    isFetching: false,
    errorMessages: ''
  },
  allRealtors: null,
  errorRealtors: null,
  isFetching: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.REALTORS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case CONSTANTS.REALTORS_SUCCESS:
      return {
        ...state,
        allRealtors: action.results,
        isFetching: false
      }
    case CONSTANTS.REALTORS_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    case CONSTANTS.REALTOR_REQUEST:
      return {
        ...state,
        realtor: {
          isFetching: true
        }
      }
    case CONSTANTS.REALTOR_SUCCESS:
      return {
        ...state,
        realtor: {
          ...action.results,
          isFetching: false
        }
      }
    case CONSTANTS.REALTOR_FAILURE:
      return {
        ...state,
        isFetching: false
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
          errorMessages: action.errorMessage,
          hasMore: false
        }
      }
    case CONSTANTS.MESSAGE_REQUEST:
      return {
        ...state,
        message: {
          ...state.message,
          isFetching: true
        }
      }
    case CONSTANTS.MESSAGE_SUCCESS:
      return {
        ...state,
        message: {
          ...action.results,
          isFetching: false
        }
      }
    case CONSTANTS.MESSAGE_FAILURE:
      return {
        ...state,
        message: {
          ...state.message,
          isFetching: false
        }
      }
    case CONSTANTS.CLEAN_MESSAGES:
      return {
        ...state,
        message: {
          isFetching: false,
          errorMessage: ''
        },
        realtorMessages: {
          isFetching: false,
          messages: [],
          errorMessages: '',
          pageIndex: 1,
          hasMore: true
        }
      }

    default:
      return state
  }
}

export default reducer
