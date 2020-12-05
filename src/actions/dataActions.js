export const CONSTANTS = {
  REALTORS_REQUEST: 'REALTORS_REQUEST',
  REALTORS_SUCCESS: 'REALTORS_SUCCESS',
  REALTORS_FAILURE: 'REALTORS_FAILURE',

  REALTOR_REQUEST: 'REALTOR_REQUEST',
  REALTOR_SUCCESS: 'REALTOR_SUCCESS',
  REALTOR_FAILURE: 'REALTOR_FAILURE',

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
  CLEAN_MESSAGES: 'CLEAN_MESSAGES',
  CLEAN_MESSAGE: 'CLEAN_MESSAGE'
}

export const getRealtors = () => ({
  type: CONSTANTS.REALTORS_REQUEST
})

export const getRealtor = realtorId => ({
  type: CONSTANTS.REALTOR_REQUEST,
  realtorId
})

export const requestError = error => ({
  type: CONSTANTS.MESSAGES_FAILURE,
  errorMessage: error
})

export const messagesSuccess = messages => ({
  type: CONSTANTS.MESSAGES_SUCCESS,
  messages,
  hasMore: messages.length > 0
})

export const requestMessages = ({ pageIndex }) => ({
  type: CONSTANTS.MESSAGES_REQUEST,
  pageIndex: pageIndex + 1
})

export const fetchMessages = (pageIndex, realtorId) => ({
  type: CONSTANTS.FETCH_MESSAGES,
  pageIndex,
  realtorId
})

export const getMessage = (realtorId, messageId) => ({
  type: CONSTANTS.MESSAGE_REQUEST,
  realtorId,
  messageId
})

export const cleanMessages = () => ({
  type: CONSTANTS.CLEAN_MESSAGES
})

export const cleanMessage = () => ({
  type: CONSTANTS.CLEAN_MESSAGE
})

export const markMessageRead = (realtorId, message) => ({
  type: CONSTANTS.MESSAGE_READ_REQUEST,
  realtorId,
  message
})
