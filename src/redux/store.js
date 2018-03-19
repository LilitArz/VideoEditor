import { createStore } from "redux"
import reducers from "../reducer/reducers"

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__()
)
