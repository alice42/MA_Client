export const CONSTANTS = {
  REALTORS_REQUEST: 'REALTORS_REQUEST',
  REALTORS_SUCCESS: 'REALTORS_SUCCESS',
  REALTORS_FAILURE: 'REALTORS_FAILURE',
  MESSAGES_REQUEST: 'MESSAGES_REQUEST',
  MESSAGES_SUCCESS: 'MESSAGES_SUCCESS',
  MESSAGES_FAILURE: 'MESSAGES_FAILURE',
  FETCH_MESSAGES: 'FETCH_MESSAGES'
}

export const getRealtors = () => {
  return {
    type: CONSTANTS.REALTORS_REQUEST
  }
}

export const requestError = error => ({
  type: CONSTANTS.MESSAGES_FAILURE,
  errorMessage: error
})

export const messagesSuccess = messages => {
  console.log(messages)
  return {
    type: CONSTANTS.MESSAGES_SUCCESS,
    messages,
    hasMore: messages.length > 0
  }
}

export const requestMessages = ({ pageIndex }) => {
  return {
    type: CONSTANTS.MESSAGES_REQUEST,
    pageIndex: pageIndex + 1
  }
}

export const fetchMessages = (pageIndex, realtorId) => {
  return {
    type: CONSTANTS.FETCH_MESSAGES,
    pageIndex,
    realtorId
  }
}
