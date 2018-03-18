import React, { Component } from "react"
import { store } from "../redux/store"
import { Provider } from "react-redux"
import VideoHolder from "./VideoHolder"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <VideoHolder />
      </Provider>
    )
  }
}

export default App
