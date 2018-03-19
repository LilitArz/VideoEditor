import { reducer } from "../reducer/index"
import { sliceReducer } from "../reducer/sliceReducer"
import { combineReducers } from "redux"

export default combineReducers({
  reducer,
  sliceReducer
})
