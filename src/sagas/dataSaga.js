import { call, put, takeEvery, all } from 'redux-saga/effects'
import { CONSTANTS } from '../actions/dataActions'
import {
  getRealtorsMethod,
  fetchMessagesMethod
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

export default function* rootSaga() {
  yield all([
    yield takeEvery(CONSTANTS.REALTORS_REQUEST, getRealtors),
    yield takeEvery(CONSTANTS.FETCH_MESSAGES, fetchMessages),
    yield takeEvery(CONSTANTS.FETCH_MESSAGES, updatePageToFetch)
  ])
}
