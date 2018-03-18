import React, { Component } from "react"
import { store } from "../redux/store"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { addLink } from "../redux/action"
import { Button } from "./Button"

const actionCreators = dispatch =>
  bindActionCreators(
    {
      addLink
    },
    dispatch
  )
const mapStateToProps = store => {
  return {
    link: store.link
  }
}

class VideoHolder extends Component {
  render() {
    return (
      <div>
        <Button addLink={this.props.addLink} />
      </div>
    )
  }
}

export default connect(mapStateToProps, actionCreators)(VideoHolder)
