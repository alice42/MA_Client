export const CONSTANTS = {
  REALTORS_REQUEST: 'REALTORS_REQUEST',
  REALTORS_SUCCESS: 'REALTORS_SUCCESS',
  REALTORS_FAILURE: 'REALTORS_FAILURE',
  MESSAGES_REQUEST: 'MESSAGES_REQUEST',
  MESSAGES_SUCCESS: 'MESSAGES_SUCCESS',
  MESSAGES_FAILURE: 'MESSAGES_FAILURE',
  MESSAGE_REQUEST: 'MESSAGE_REQUEST',
  MESSAGE_SUCCESS: 'MESSAGE_SUCCESS',
  MESSAGE_FAILURE: 'MESSAGE_FAILURE',
  MESSAGE_READ_REQUEST: 'MESSAGE_READ_REQUEST',
  MESSAGE_READ_SUCCESS: 'MESSAGE_READ_SUCCESS',
  MESSAGE_READ_FAILURE: 'MESSAGE_READ_FAILURE',
  FETCH_MESSAGES: 'FETCH_MESSAGES',
  CLEAN_MESSAGES: 'CLEAN_MESSAGES'
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

export const cleanMessages = () => {
  return {
    type: CONSTANTS.CLEAN_MESSAGES
  }
}

export const getMessage = (realtorId, messageId) => {
  return {
    type: CONSTANTS.MESSAGE_REQUEST,
    realtorId,
    messageId
  }
}

export const markMessageRead = (realtorId, messageId) => {
  return {
    type: CONSTANTS.MESSAGE_READ_REQUEST,
    realtorId,
    messageId
  }
}
