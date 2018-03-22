import React, { Component } from "react"
import { store } from "../redux/store"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import {
  playVideo,
  addLink,
  pauseVideo,
  changeDuration,
  changeVolume,
  setParameters,
  slicer,
  clicked,
  mouseLeave,
  playSlicedVideo
} from "../redux/action"
import { Button } from "./Button"
import { Video } from "./Video"
import { Navbar } from "./Navbar"
import { VideoSlicer } from "./videoSlicer"

const actionCreators = dispatch =>
  bindActionCreators(
    {
      playVideo,
      addLink,
      pauseVideo,
      changeDuration,
      changeVolume,
      setParameters,
      slicer,
      clicked,
      mouseLeave,
      playSlicedVideo
    },
    dispatch
  )

const mapStateToProps = store => {
  return {
    videoDuration: store.videoDuration,
    link: store.link,
    isPaused: store.isPaused,
    projectVolume: store.projectVolume,
    slicedArray: store.slicedArray,
    sliceActionPartameters: store.sliceActionPartameters,
    slicedDurationArray: store.slicedDurationArray,
    playPause: store.playPause
  }
}

class VideoHolder extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "1000px",
          float: "left"
        }}
      >
        <Video
          link={this.props.link}
          isPaused={this.props.isPaused}
          playVideo={this.props.playVideo}
          pauseVideo={this.props.pauseVideo}
          changeVideoDuration={this.props.changeDuration}
          slicedDurationArray={this.props.slicedDurationArray}
          playPause={this.props.playPause}
        />
        <Navbar
          videoLink={this.props.link}
          changeVolume={this.props.changeVolume}
          projectVolume={this.props.projectVolume}
          videoDuration={this.props.videoDuration}
          isPaused={this.props.isPaused}
          playVideo={this.props.playVideo}
          pauseVideo={this.props.pauseVideo}
        />
        <VideoSlicer
          setParameters={this.props.setParameters}
          slicer={this.props.slicer}
          slicedArray={this.props.slicedArray}
          sliceActionPartameters={this.props.sliceActionPartameters}
          mouseLeave={this.props.mouseLeave}
          clicked={this.props.clicked}
          slicedDurationArray={this.props.slicedDurationArray}
          playSlicedVideo={this.props.playSlicedVideo}
        />

        <Button addLink={this.props.addLink} />
      </div>
    )
  }
}

export default connect(mapStateToProps, actionCreators)(VideoHolder)
