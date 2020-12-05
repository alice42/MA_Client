import { call, put, takeEvery, all, select } from 'redux-saga/effects'
import { CONSTANTS } from '../actions/dataActions'
import {
  getRealtorsMethod,
  getRealtorMethod,
  fetchMessagesMethod,
  getMessageMethod,
  markAsReadMethod
} from '../services/dataServices'

import {
  messagesSuccess,
  requestError,
  requestMessages
} from '../actions/dataActions'

function* getRealtors(action) {
  try {
    const response = yield call(getRealtorsMethod)
    if (response.status === 200) {
      yield put({
        type: CONSTANTS.REALTORS_SUCCESS,
        results: JSON.parse(response.data)
      })
    } else {
      yield put({
        type: CONSTANTS.REALTORS_FAILURE,
        error: JSON.parse(response.data)
      })
    }
  } catch (error) {
    yield put({ type: CONSTANTS.REALTORS_FAILURE, error: error.message })
  }
}

function* getRealtor(action) {
  try {
    const payload = {
      realtorId: action.realtorId
    }
    const response = yield call(getRealtorMethod, payload)
    if (response.status === 200) {
      yield put({
        type: CONSTANTS.REALTOR_SUCCESS,
        results: JSON.parse(response.data)
      })
    } else {
      yield put({
        type: CONSTANTS.REALTOR_FAILURE,
        error: JSON.parse(response.data)
      })
    }
  } catch (error) {
    yield put({ type: CONSTANTS.REALTOR_FAILURE, error: error.message })
  }
}

function* getMessage(action) {
  try {
    const payload = {
      realtorId: action.realtorId,
      messageId: action.messageId
    }
    const response = yield call(getMessageMethod, payload)
    if (response.status === 200) {
      yield put({
        type: CONSTANTS.MESSAGE_SUCCESS,
        results: JSON.parse(response.data),
        ids: {
          realtorId: payload.realtorId,
          messageId: payload.messageId
        }
      })
    } else {
      yield put({
        type: CONSTANTS.MESSAGE_FAILURE,
        error: JSON.parse(response.data)
      })
    }
  } catch (error) {
    yield put({ type: CONSTANTS.MESSAGE_FAILURE, error: error.message })
  }
}

function* fetchMessages(action) {
  try {
    const payload = {
      pageIndex: action.pageIndex,
      realtorId: action.realtorId
    }
    const response = yield call(fetchMessagesMethod, payload)
    if (response.status === 200) {
      yield put(messagesSuccess(JSON.parse(response.data)))
    } else {
      yield put(requestError(JSON.parse(response.data)))
    }
  } catch (error) {
    yield put(requestError(error.message))
  }
}

function* updatePageToFetch(action) {
  try {
    const payload = {
      pageIndex: action.pageIndex
    }
    yield put(requestMessages(payload))
  } catch (error) {
    yield put(requestError(error.message))
  }
}

function* markAsRead(action) {
  try {
    const payload = {
      realtorId: action.realtorId,
      message: action.message
    }
    const response = yield call(markAsReadMethod, payload)
    if (response.status === 200) {
      yield put({
        type: CONSTANTS.MESSAGE_READ_SUCCESS,
        results: JSON.parse(response.data)
      })
    } else {
      yield put({
        type: CONSTANTS.MESSAGE_READ_FAILURE,
        error: JSON.parse(response.data)
      })
    }
  } catch (error) {
    yield put({ type: CONSTANTS.MESSAGE_READ_FAILURE, error: error.message })
  }
}

export default function* rootSaga() {
  yield all([
    yield takeEvery(CONSTANTS.REALTORS_REQUEST, getRealtors),
    yield takeEvery(CONSTANTS.REALTOR_REQUEST, getRealtor),
    yield takeEvery(CONSTANTS.FETCH_MESSAGES, fetchMessages),
    yield takeEvery(CONSTANTS.FETCH_MESSAGES, updatePageToFetch),
    yield takeEvery(CONSTANTS.MESSAGE_REQUEST, getMessage),
    yield takeEvery(CONSTANTS.MESSAGE_READ_REQUEST, markAsRead)
  ])
}
