import { call, put, takeEvery, all } from 'redux-saga/effects'
import { CONSTANTS } from '../actions/dataActions'
import { getRealtorsMethod } from '../services/dataServices'

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

export default function* rootSaga() {
  yield all([yield takeEvery(CONSTANTS.REALTORS_REQUEST, getRealtors)])
}
