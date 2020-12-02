import { call, put, takeEvery, all, select } from 'redux-saga/effects'
import { CONSTANTS } from '../actions/dataActions'
import { getRealtorsMethod, getMessagesMethod } from '../services/dataServices'

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

function* getMessages(action) {
  try {
    const response = yield call(getMessagesMethod, action.realtorId)
    if (response.status === 200) {
      yield put({
        type: CONSTANTS.MESSAGES_SUCCESS,
        results: JSON.parse(response.data)
      })
    } else {
      yield put({
        type: CONSTANTS.MESSAGES_FAILURE,
        error: JSON.parse(response.data)
      })
    }
  } catch (error) {
    yield put({ type: CONSTANTS.REALTORS_FAILURE, error: error.message })
  }
}

export default function* rootSaga() {
  yield all([
    yield takeEvery(CONSTANTS.REALTORS_REQUEST, getRealtors),
    yield takeEvery(CONSTANTS.MESSAGES_REQUEST, getMessages)
  ])
}
