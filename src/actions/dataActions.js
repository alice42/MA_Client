export const CONSTANTS = {
  REALTORS_REQUEST: 'REALTORS_REQUEST',
  REALTORS_SUCCESS: 'REALTORS_SUCCESS',
  REALTORS_FAILURE: 'REALTORS_FAILURE',
  MESSAGES_REQUEST: 'MESSAGES_REQUEST',
  MESSAGES_SUCCESS: 'MESSAGES_SUCCESS',
  MESSAGES_FAILURE: 'MESSAGES_FAILURE'
}

export const getRealtors = () => {
  return {
    type: CONSTANTS.REALTORS_REQUEST
  }
}

export const getMessages = realtorId => {
  return {
    type: CONSTANTS.MESSAGES_REQUEST,
    realtorId
  }
}
