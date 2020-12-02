import { combineReducers } from 'redux'
import dataReducer from './dataReducer'

const mainReducer = combineReducers({
  data: dataReducer
})

export default mainReducer
